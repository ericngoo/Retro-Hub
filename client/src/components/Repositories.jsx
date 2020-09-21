import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

function Repositories({allRepos, pinnedRepos}) {
    
    const [allReposSorted, setAllReposSorted] = useState([]);

    const [pinnedStatus, setPinnedStatus] = useState(false);
    const [sortMessage, setSortMessage] = useState("Stars");
    

    function starBtnClicked() {
        setPinnedStatus(false);
        setSortMessage("Stars");
        sortRepos('stars');
    }

    function forkBtnClicked() {
        setPinnedStatus(false);
        setSortMessage("Forks")
        sortRepos('forks');
    }

    function pinnedBtnClicked() {
        setPinnedStatus(true);
        setSortMessage("Pinned");
    }

    function sortRepos(sortBy) {
        let sortedRepos;

        if(sortBy === 'stars') {
            sortedRepos = allRepos.sort((repo1, repo2) => {
                return repo2.stargazers_count - repo1.stargazers_count;
            }).slice(0,8)
        } else {
            sortedRepos = allRepos.sort((repo1, repo2) => {
                return repo2.forks - repo1.forks;
            }).slice(0,8)
        }
        
        setAllReposSorted(sortedRepos);
    }

    useEffect(() => {
        sortRepos('stars');
    }, [])

    return (
        <div className="repo-container">
            <div className="nes-container is-dark is-rounded repo-scroll" style={{ padding: "1em" }}>
                <p className="title">Repositories</p>
                <h3 style={{textAlign: "center"}}>Sorted by: {sortMessage} </h3>
                <div className="sort-container">
                    <button 
                        type="button" 
                        className="nes-btn is-warning"
                        onClick={starBtnClicked}>Stars</button>
                    <button 
                        type="button" 
                        className="nes-btn is-primary"
                        onClick={forkBtnClicked}>Forks</button>
                    <button 
                        type="button" 
                        className="nes-btn is-error"
                        onClick={pinnedBtnClicked}>Pinned</button>
                </div>

                <div className="repo-flex">
                    { pinnedStatus ? 
                        pinnedRepos.map((repository, index) => { 
                        return (
                        <ProjectCard 
                            key={index}
                            index={index}
                            projectTitle={repository.repo}
                            projectDescription={repository.description}
                            projectLanguage={repository.language}
                            projectStars={repository.stars}
                            projectForks={repository.forks} 
                            projectPath={repository.owner + "/" + repository.repo}/>
                        )}) : 
                        allReposSorted.map((repository, index) => { 
                            return (
                            <ProjectCard 
                                key={index}
                                index={index}
                                projectTitle={repository.name}
                                projectDescription={repository.description}
                                projectLanguage={repository.language}
                                projectStars={repository.stargazers_count}
                                projectForks={repository.forks} 
                                projectPath={repository.full_name}/>
                            )}) }
                </div>

            </div>
        </div>
    )
}

export default Repositories;