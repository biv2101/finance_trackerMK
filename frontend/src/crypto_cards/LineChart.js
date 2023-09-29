import React from "react";
import { Line } from "react-chartjs-2";
import "./LineChart.css";
function LineChart({ chartData }) {
    const chart_style={
        width: 240,
        marginLeft: 25,
        paddingTop: 10,
    }
    return (
        <div className="chart-container">
            <Line
                data={chartData}
                style={chart_style}
                options={{
                    elements: {
                        point:{
                            radius: 0,
                        }
                    },
                    plugins: {
                        title: {
                            display: false,
                        },
                        legend: {
                            display: false,
                        },
                        colors: {
                            enabled: false,
                        }
                    },
                    scales:{
                        x:{
                            ticks:{
                                display: false,
                            },
                            grid:{
                                drawBorder: false,
                                drawOnChartArea: false,
                                display: false,
                            },
                        },
                        y:{
                            ticks:{
                                display: false,
                            },
                            grid:{
                                drawBorder: false,
                                drawOnChartArea: false,
                                display: false,
                            },
                        },
                    }
                }}
            />
        </div>
    );
}
export default LineChart;