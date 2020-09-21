import React from 'react';

function Error() {
    return (
        <div className="error-container">
            <div className="nes-container is-dark is-rounded">
            <h1><span style={{color: "#FA1616"}}>ERROR</span>: User does not exist!</h1>
            <h2>Return to the search page by clicking on the banner!</h2>
            </div>
        </div>
    )
}

export default Error;