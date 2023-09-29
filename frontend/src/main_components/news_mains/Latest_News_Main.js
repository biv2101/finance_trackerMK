import React, {useEffect, useState} from "react";
import "../Main.css";
import {NewsData} from "../News_info";
import {CryptoData_1} from "../../crypto_cards_info/Crypto_cards_info_1";
import Latest_News_Card_1 from "../../menu_components/latest_news/Latest_News_cards_1";
import Latest_News_Card_2 from "../../menu_components/latest_news/Latest_News_cards_2";
import Latest_News_Card_3 from "../../menu_components/latest_news/Latest_News_cards_3";
import Latest_News_Card_4 from "../../menu_components/latest_news/Latest_News_cards_4";
import Latest_News_Card_5 from "../../menu_components/latest_news/Latest_News_cards_5";
import Latest_News_Card_6 from "../../menu_components/latest_news/Latest_News_cards_6";
import Latest_News_Card_7 from "../../menu_components/latest_news/Latest_News_cards_7";
import {SymbolsData} from "../../crypto_cards_info/Symbols";
import Chart from "react-apexcharts";
import axios from "axios";
import {asad} from "../../navbar_components/Code_Page";

async function fnd(option1) {
    let val;
    await fetch("/price/" + option1 + "/m").then((res) => res.text())
        .then((text) => {
            val = JSON.parse(text);
        });
    return JSON.parse(val)
}

export default function Latest_News_Main() {
    function useForceUpdate() {
        const [value, setValue] = useState(0); // integer state
        return () => setValue(value => value + 1); // update the state to force render
    }

    const style_copyright = {
        color: localStorage.getItem("darkTheme") ? "ghostwhite" : "#1F1F1E",
    }
    const Latest_News_card_1 = NewsData.slice(0, 1).map(item => {
        return (
            <Latest_News_Card_1
                key={item.id}
                {...item}
            />
        )
    })
    const Latest_News_card_2 = NewsData.slice(1, 2).map(item => {
        return (
            <Latest_News_Card_2
                key={item.id}
                {...item}
            />
        )
    })
    const Latest_News_card_3 = NewsData.slice(2, 3).map(item => {
        return (
            <Latest_News_Card_3
                key={item.id}
                {...item}
            />
        )
    })
    const Latest_News_card_4 = NewsData.slice(3, 4).map(item => {
        return (
            <Latest_News_Card_4
                key={item.id}
                {...item}
            />
        )
    })
    const Latest_News_card_5 = NewsData.slice(4, 5).map(item => {
        return (
            <Latest_News_Card_5
                key={item.id}
                {...item}
            />
        )
    })
    const Latest_News_card_6 = NewsData.slice(5, 6).map(item => {
        return (
            <Latest_News_Card_6
                key={item.id}
                {...item}
            />
        )
    })
    const Latest_News_card_7 = NewsData.slice(6, 7).map(item => {
        return (
            <Latest_News_Card_7
                key={item.id}
                {...item}
            />
        )
    })

    let CryptoDataVal = CryptoData_1;

    //trackero

    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');

    const handleOption1Change = (event) => {
        setSelectedOption1(event.target.value);
    };

    const handleOption2Change = (event) => {
        setSelectedOption2(event.target.value);
    };

    const handleSaveClick = () => {
        // console.log(CryptoDataVal)
        Data(selectedOption1, selectedOption2);
    };

    // useEffect(() => {
    //     CryptoDataVal = fnd(selectedOption1)
    //     console.log(CryptoDataVal)
    // }, []);
    //     console.log(CryptoDataVal)


    const Data = (option1, option2) => {
        console.log("Option 1", option1);
        console.log("Option 2", option2);
    };


    const TimeStamp = CryptoDataVal.map((obj) => obj.time)
    const dates = TimeStamp.map((timestamp) => {
        const dateObject = new Date(timestamp * 1000); // Convert to milliseconds
        const options = {year: 'numeric', month: 'numeric', day: 'numeric'};
        return dateObject.toLocaleDateString(undefined, options);
    });
    const [state, setState] = useState({
        options: {
            colors: ["green"],
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: dates,
                labels: {
                    style: {
                        colors: "goldenrod"
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "goldenrod"
                    }
                }
            }
        },
        series: [
            {
                name: "series-1",
                data: CryptoDataVal.map((obj) => obj.close.toFixed(5))
            }
        ]
    })
    return (
        <div>
            <main className="main_2">
                <div className="child_element_2">
                    <div className="chart_container">
                        <div>
                            <select className="crypt_dropdown" value={selectedOption1} onChange={handleOption1Change}>
                                <option value="">Choose an option</option>
                                {SymbolsData.map((crypto_sym) => (
                                    <option className="crypto_dropdown_content" key={crypto_sym.name}
                                            value={crypto_sym.sym}>
                                        {crypto_sym.name}
                                    </option>
                                ))}
                            </select>
                            <select className="crypt_dropdown" value={selectedOption2} onChange={handleOption2Change}>
                                <option key="Year 1" className="crypto_dropdown_content" value="1 Year">1 Year</option>
                                <option key="Month 1" className="crypto_dropdown_content" value="1 Month">1 Month
                                </option>
                                <option key="Week 1" className="crypto_dropdown_content" value="1 Week">1 Week</option>
                            </select>
                            <button className="crypto_button" onClick={handleSaveClick}>Save</button>
                        </div>
                        <Chart
                            options={state.options}
                            series={state.series}
                            type="area"
                            width="870"
                            height="250"
                        />
                    </div>
                    <h2 className="stories">
                        <span className="blank_space">a</span>
                        Stories for you
                    </h2>
                    {Latest_News_card_1}
                    {Latest_News_card_2}
                    {Latest_News_card_3}
                    {Latest_News_card_4}
                    {Latest_News_card_5}
                    {Latest_News_card_6}
                    {Latest_News_card_7}
                </div>
            </main>
            <span className="copyright_1"
                  style={style_copyright}>© Copyright 2023/2024. All rights reserved!</span>
        </div>
    );
}
