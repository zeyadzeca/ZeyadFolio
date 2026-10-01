import React, {useState, useEffect, useContext} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Projects() {
  const [repo, setrepo] = useState([]);
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    if (!openSource.display) {
      return undefined;
    }
    const getRepoData = () => {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then(response => {
          const edges =
            response &&
            response.data &&
            response.data.user &&
            response.data.user.pinnedItems &&
            response.data.user.pinnedItems.edges;
          setrepo(Array.isArray(edges) ? edges : []);
        })
        .catch(function (error) {
          console.error(
            `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
          );
          setrepo([]);
        });
    };
    getRepoData();
  }, []);

  if (!openSource.display || !repo.length) {
    return null;
  }

  return (
    <section className="main" id="opensource" aria-label="Open source galaxy">
      <span className="section-orbit">Project Galaxy</span>
      <h1 className="project-title">Open Source Missions</h1>
      <div className="repo-cards-div-main">
        {repo.map((v, i) => {
          if (!v) {
            console.error(
              `Github Object for repository number : ${i} is undefined`
            );
            return null;
          }
          return <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />;
        })}
      </div>
      {socialMediaLinks.github ? (
        <Button
          text={"More Projects"}
          className="project-button"
          href={socialMediaLinks.github}
          newTab={true}
        />
      ) : null}
    </section>
  );
}
