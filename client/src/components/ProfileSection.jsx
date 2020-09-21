import React from 'react';


function ProfileSection(props) {
    function goToGithubAccount() {
        window.open('https://github.com/'+ props.profileData.login, '_blank');
    }
    
    return (
        <div className="profile-container">
            <div className="nes-container is-rounded is-dark">
                <p className="title">Profile</p>
                <div className="profile-flex">
                    
                    <div className="profile-pic floating" onClick={goToGithubAccount}>
                        <img className="pxl-border" src={props.profileData.avatar_url} alt="profile-pic"/>
                    </div>

                    <div className="profile-info">
                        <div className="left-side">
                            <p>Name <span className="right">{props.profileData.name || props.profileData.login || "N/A"}</span></p>
                            <p>User <span className="right">@{props.profileData.login || "N/A"}</span></p>
                            <p>Location <span className="right">{props.profileData.location || "N/A"}</span></p>
                            <p>Followers <span className="right">{props.profileData.followers}</span></p>
                            <p>Following <span className="right">{props.profileData.following}</span></p>
                            <p>Repositories <span className="right">{props.profileData.public_repos}</span></p>
                        </div>

                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileSection;