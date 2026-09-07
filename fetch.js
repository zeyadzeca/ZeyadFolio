const fs = require("fs");
const https = require("https");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

function httpsRequest(options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let data = "";
      res.on("data", chunk => {
        data += chunk;
      });
      res.on("end", () => {
        resolve({statusCode: res.statusCode, data});
      });
    });
    req.on("error", reject);
    if (body) {
      req.write(body);
    }
    req.end();
  });
}

async function fetchGitHubProfile() {
  if (USE_GITHUB_DATA !== "true") {
    console.log("Skipping GitHub data fetch (USE_GITHUB_DATA is not true).");
    return;
  }

  if (!GITHUB_USERNAME || !GITHUB_TOKEN) {
    console.warn(
      "Skipping GitHub data fetch: GITHUB_USERNAME or REACT_APP_GITHUB_TOKEN is missing. The portfolio will build without GitHub profile data."
    );
    return;
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
  const query = JSON.stringify({
    query: `
{
  user(login:"${GITHUB_USERNAME}") {
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`
  });

  try {
    const {statusCode, data} = await httpsRequest(
      {
        hostname: "api.github.com",
        path: "/graphql",
        port: 443,
        method: "POST",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          "User-Agent": "Node"
        }
      },
      query
    );

    if (statusCode !== 200) {
      console.warn(
        `GitHub request failed with status ${statusCode}. Continuing build without GitHub data.`
      );
      return;
    }

    fs.writeFileSync("./public/profile.json", data);
    console.log("saved file to public/profile.json");
  } catch (error) {
    console.warn(
      "GitHub request failed. Continuing build without GitHub data.",
      error.message || error
    );
  }
}

async function fetchMediumBlogs() {
  if (!MEDIUM_USERNAME) {
    return;
  }

  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
  try {
    const {statusCode, data} = await httpsRequest({
      hostname: "api.rss2json.com",
      path: `/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
      port: 443,
      method: "GET"
    });

    if (statusCode !== 200) {
      console.warn(
        `Medium request failed with status ${statusCode}. Continuing build without Medium data.`
      );
      return;
    }

    fs.writeFileSync("./public/blogs.json", data);
    console.log("saved file to public/blogs.json");
  } catch (error) {
    console.warn(
      "Medium request failed. Continuing build without Medium data.",
      error.message || error
    );
  }
}

async function main() {
  await Promise.all([fetchGitHubProfile(), fetchMediumBlogs()]);
}

main().catch(error => {
  console.warn(
    "Optional data fetch failed. Continuing with the production build.",
    error.message || error
  );
});
