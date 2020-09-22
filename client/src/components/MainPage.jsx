import React, { useEffect, useState } from 'react';
import ProfileSection from './ProfileSection';
import LanguageChart from './LanguageChart';
import Repositories from './Repositories';
import Contributions from './Contributions';
import Error from './Error';
import Acknowledgment from './Acknowledgment';

import { useParams } from 'react-router-dom';
import GhPolyglot from 'gh-polyglot';

function MainPage() {
  let { user } = useParams();

  const [profileData, setProfileData] = useState(null);
  const [pinnedRepoData, setPinnedRepoData] = useState(null);
  const [allReposData, setAllReposData] = useState(null);
  const [languageData, setLanguageData] = useState(null);
  const [orgStatus, setOrgStatus] = useState(false);

  const[requestError, setRequestError] = useState(false)

  function getProfileData() {
    const apiURL = "https://api.github.com/users/" + user;

    fetch(apiURL)
      .then((response) => {
        if(response.status === 404) {
          return setRequestError(true);
        }
        return response.json();
      })
      .then((data) => {
        if(data.type !== "User") {
          setOrgStatus(true);
        }
        setProfileData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function getRepositoryData() {
    const pinnedRepoURL = "https://gh-pinned-repos.now.sh/?username=" + user;
    fetch(pinnedRepoURL)
      .then((response) => {
        if(response.status === 404) {
          return setRequestError(true);
        }
        return response.json();
      })
      .then((data) => {
        setPinnedRepoData(data);
      })
      .catch(error => {
        console.log(error);
      });


    const allReposURL = "https://api.github.com/users/"+ user +"/repos?per_page=100";
    fetch(allReposURL)
      .then((response) => {
        if(response.status === 404) {
          return setRequestError(true);
        }
        return response.json();
      })
      .then((data) => {
        setAllReposData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function getLanguageData() {
    const me = new GhPolyglot(user);
    
    me.userStats((err, stats) => {
      if(err) {
        console.error(err);
        setRequestError(true);
      } else {
        setLanguageData(stats);
      }
    })
  }

  function openPersonalSite() {
    window.open('https://ericngoo.github.io/', '_blank');
  }
  

  useEffect(() => {
    getProfileData();
    getRepositoryData();
    getLanguageData();
  }, [])

  return (
    <div>
      { requestError ? (
        <Error />
      ) : (
        <div>
          <section>
            <div className="row">

              <div className="col">
                <div className="card">
                  { profileData ? <ProfileSection profileData={profileData} /> : null}
                  { languageData ? <LanguageChart languageData={languageData}/> : null }
                  { profileData ? <Contributions orgStatus={orgStatus} user={profileData.login} /> : null }
                </div>
              </div>

              <div className="col">
                <div className="card">
                  { allReposData && pinnedRepoData ? <Repositories allRepos={allReposData} pinnedRepos={pinnedRepoData}/> : null}
                  <Acknowledgment />
                </div>
              </div>


            </div>
          </section>
          <div className="footer">
            <div onClick={openPersonalSite} className="nes-container is-rounded" style={{backgroundColor: "#fff", borderColor: "hotpink"}}>
              <p>Copyright (C) ericngoo Inc 2020.</p>
              <p>All Rights Reserved</p>
            </div>
          </div>
        </div>
        )}

      
  
    </div>
  );
}

export default MainPage;