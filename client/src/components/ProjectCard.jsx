import React from 'react';

function ProjectCard(props) {
    function handleClick() {
        window.open('https://github.com/'+ props.projectPath, '_blank');
    }
    
    return (
        <div className="project-card-container dotted-background" onClick={handleClick}>
            <p className="project-title">{(props.index + 1) + ". "  + props.projectTitle}</p>

            <div className="project-card-flex">
                <p> {props.projectDescription ? props.projectDescription : "No project description! Click on card to view more stats on their Github!"}</p>

                <div className="card-footer">

                    <div className="item-container">
                        <div className="footer-item">
                            <i className="nes-icon is-small heart"></i>
                            <span> {props.projectLanguage || "Null"} </span>
                        </div>

                        <div className="footer-item">
                            <i className="nes-icon is-small star"></i>
                            <span> {props.projectStars} </span>
                        </div>

                        <div className="footer-item">
                            <img src={process.env.PUBLIC_URL + "/assets/pixil-frame-0.png"} alt="deuhz" />
                            <span> {props.projectForks} </span>
                        </div>
                    </div>

                    <span> {props.projectPath} </span>

                </div>
            </div>
        </div>
    )
}

export default ProjectCard;