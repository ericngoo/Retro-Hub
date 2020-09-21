import React from 'react';

function Acknowledgment() {
    function openGitRestApi() {
        window.open('https://docs.github.com/en/rest', '_blank');
    }

    function openGitHubPolyglot() {
        window.open('https://github.com/IonicaBizau/node-gh-polyglot', '_blank');
    }

    function openNesCSS() {
        window.open('https://nostalgic-css.github.io/NES.css/', '_blank');
    }

    function openChartJS() {
        window.open('https://www.chartjs.org/', '_blank');
    }

    function openMe() {
        window.open('https://github.com/ericngoo', '_blank');
    }


    return (
        <div className="acknowledgement-container">
            <div className="nes-container is-rounded is-dark floating">
                <p>Acknowledgments!</p>
                <br />
                <p>This project was made possible with: </p>

                <div className="lists">

                    <p onClick={openGitRestApi}>
                        <span> <i className="nes-icon is-small heart"></i> </span>
                        Github REST API
                    </p>
                    <p onClick={openGitHubPolyglot}>
                        <span> <i className="nes-icon is-small heart"></i> </span>
                        GitHub Polyglot
                    </p>
                    <p onClick={openChartJS}>
                        <span> <i className="nes-icon is-small heart"></i> </span>
                        ChartJs
                    </p>
                    <p onClick={openNesCSS}>
                        <span> <i className="nes-icon is-small heart"></i> </span>
                        NES.css
                    </p>
                    <p onClick={openMe}>
                        <span> <i className="nes-icon is-small star"></i> </span>
                        <span className="me-link"> Visit Project Repository for full list! </span>
                    </p>

                </div>

            </div>
        </div>
    )
}

export default Acknowledgment;