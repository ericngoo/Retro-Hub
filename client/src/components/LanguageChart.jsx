import React, { useEffect } from 'react';

import Chart from 'chart.js';

function LanguageChart(props) {
    
    function createLanguageChart() {
        const ctx = document.getElementById('languageChart');
        const chartLabels = props.languageData.map(language => language.label);
        const chartData = props.languageData.map(language => language.value);
        const charColor = props.languageData.map(language => language.color);

        Chart.defaults.global.defaultFontFamily = 'glitch';
        Chart.defaults.global.defaultFontColor = '#fff';
        Chart.defaults.global.defaultFontSize = 16;
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: chartLabels,
                datasets: [{
                    label: null,
                    data: chartData,
                    backgroundColor: charColor,
                    borderWidth: 0,
                    borderColor: "#212529",
                    hoverBorderColor: "#fff"
                }]
            },
            options: {
                legend: {
                    display: true,
                    position: 'top',
                    align: "center",
                    fullWidth: false, 
                    labels: {
                        fontSize: 18
                    }
                },
                
                layout: {
                    padding: {
                        top: 5,
                        bottom: 5,
                        left: 10,
                        right: 10
                    }
                },
                cutoutPercentage: 0,
                circumference: 1 * Math.PI,
                rotation: -Math.PI,
                responsive: true,
                maintainAspectRatio: false
            }
        })
    }

    useEffect(() => {
        if(props.languageData.length) {
            createLanguageChart();
        }
    }, [])


    return (
        <div className="lang-chart-container">
            <div className="nes-container is-dark is-rounded">
                <p className="title">Languages</p>
                
                <div className="chart-flex">
                    <canvas id="languageChart" width="300" height="300"></canvas> 
                </div>

            </div>
        </div>
    )
}

export default LanguageChart;