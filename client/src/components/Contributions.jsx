import React, { useEffect } from 'react';
import Chart from 'chart.js';
import { cleanData } from '../helpers/CleanData';

function Contributions(props) {

    function createContributionChart(data) {
        const cleanedData = cleanData(data);
        console.log(cleanedData.labels);
        console.log(cleanedData.labelData);
        const ctx = document.getElementById("contributionChart");

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: cleanedData.labels,
                datasets: [{
                    data: cleanedData.labelData,
                    label: "Total Contributions per month",
                    backgroundColor: "#46C016",
                    fill: false,
                    borderColor: "#46C016"
                }],
            },
            options: {
                layout: {
                    padding: 5
                },
                title: {
                    display: true,
                    text: 'Contributions over the last year'
                },
                scales: {
                    xAxes: [{gridLines: {color: "#929aab", lineWidth: "0.25"}}],
                    yAxes: [{gridLines: {color: "#929aab", lineWidth: "0.25"}}]
                }
            }
        })
    }

    function getContributionData() {
    
        const URL = '/' + props.user + '/count';
        fetch(URL)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          createContributionChart(data);
        })
        .catch(error => {
          console.log(error);
        });
    
      }

    useEffect(() => {
        if (!props.orgStatus) {
            getContributionData();
        }
    }, [])

    return (
        <div className="contributions-container">
            <div className="nes-container is-dark is-rounded" style={{ padding: "1em" }}>
                <p className="title">Contributions</p>
                {props.orgStatus ? (
                    <div style={{width: "100%", textAlign: "center"}}>
                        <h3>Can't load contributions...</h3>
                    </div>
                ) : (
                        <div className="chart-flex">
                            <canvas id="contributionChart" width="300" height="300"></canvas>
                        </div>
                    )}

            </div>
        </div>
    )
}

export default Contributions;