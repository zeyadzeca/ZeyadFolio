import React, {useState, useEffect} from "react";
import {openSource} from "../../portfolio";
import Contact from "../contact/Contact";
import GithubProfileCard from "../../components/githubProfileCard/GithubProfileCard";

export default function Profile() {
  const [prof, setrepo] = useState(null);

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("/profile.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
          })
          .then(response => {
            if (response && response.data && response.data.user) {
              setrepo(response.data.user);
            } else {
              setrepo("Error");
            }
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
            );
            setrepo("Error");
            openSource.showGithubProfile = "false";
          });
      };
      getProfileData();
    } else {
      setrepo("Error");
    }
  }, []);

  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    prof &&
    typeof prof === "object" &&
    prof.avatarUrl
  ) {
    return <GithubProfileCard prof={prof} key={prof.id} />;
  }
  return <Contact />;
}
