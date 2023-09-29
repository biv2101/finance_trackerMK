import React from "react";
import {useState} from "react";
import "../Main.css";
import Chart from "react-apexcharts";
import {NewsData} from "../News_info";
import {SymbolsData} from "../../crypto_cards_info/Symbols";
import Business_News_Card_1 from "../../menu_components/business_news/Business_News_cards_1";
import Business_News_Card_2 from "../../menu_components/business_news/Business_News_cards_2";
import Business_News_Card_3 from "../../menu_components/business_news/Business_News_cards_3";
import Business_News_Card_4 from "../../menu_components/business_news/Business_News_cards_4";
import Business_News_Card_5 from "../../menu_components/business_news/Business_News_cards_5";
import Business_News_Card_6 from "../../menu_components/business_news/Business_News_cards_6";
import Business_News_Card_7 from "../../menu_components/business_news/Business_News_cards_7";
export default function Business_News_Main(){
    const style_copyright={
        color: localStorage.getItem("darkTheme") ? "ghostwhite" : "#1F1F1E",
    }

    const Business_News_card_1 = NewsData.slice(8,9).map(item => {
        return (
            <Business_News_Card_1
                key={item.id}
                {...item}
            />
        )
    })
    const Business_News_card_2 = NewsData.slice(9,10).map(item => {
        return (
            <Business_News_Card_2
                key={item.id}
                {...item}
            />
        )
    })
    const Business_News_card_3 = NewsData.slice(10,11).map(item => {
        return (
            <Business_News_Card_3
                key={item.id}
                {...item}
            />
        )
    })
    const Business_News_card_4 = NewsData.slice(11,12).map(item => {
        return (
            <Business_News_Card_4
                key={item.id}
                {...item}
            />
        )
    })
    const Business_News_card_5 = NewsData.slice(12,13).map(item => {
        return (
            <Business_News_Card_5
                key={item.id}
                {...item}
            />
        )
    })
    const Business_News_card_6 = NewsData.slice(13,14).map(item => {
        return (
            <Business_News_Card_6
                key={item.id}
                {...item}
            />
        )
    })
    const Business_News_card_7 = NewsData.slice(14,15).map(item => {
        return (
            <Business_News_Card_7
                key={item.id}
                {...item}
            />
        )
    })
    const [state, setState]=useState({
        options: {
            colors: ["green"],
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]
    })
    console.log(SymbolsData);
    {
        return (
            <div>
                <main className="main_2">
                    <div className="child_element_2">
                        <select>
                            <option value="">Choose an option</option>
                            {SymbolsData.map((crypto_sym) => (
                                <option key={crypto_sym.name} value={crypto_sym.name}>{crypto_sym.name}</option>
                            ))}
                        </select>
                        <select>
                            <option value="">1 Year</option>
                            <option value="">1 Month</option>
                            <option value="">1 Week</option>
                        </select>
                        <Chart
                            options={state.options}
                            series={state.series}
                            type="area"
                            width="850"
                            height="250"
                        />
                        <h2 className="stories">
                            <span className="blank_space">a</span>
                            Stories for you
                        </h2>
                        {Business_News_card_1}
                        {Business_News_card_2}
                        {Business_News_card_3}
                        {Business_News_card_4}
                        {Business_News_card_5}
                        {Business_News_card_6}
                        {Business_News_card_7}
                    </div>
                </main>
                <span className="copyright_1"
                      style={style_copyright}>© Copyright 2023/2024. All rights reserved!</span>
            </div>
        );
    }
}
