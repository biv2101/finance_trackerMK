import React from "react";
import {useState} from "react";
import "../Main.css";
import Chart from "react-apexcharts";
import {NewsData} from "../News_info";
import Technology_News_Card_1 from "../../menu_components/technology_news/Technology_News_cards_1";
import Technology_News_Card_2 from "../../menu_components/technology_news/Technology_News_cards_2";
import Technology_News_Card_3 from "../../menu_components/technology_news/Technology_News_cards_3";
import Technology_News_Card_4 from "../../menu_components/technology_news/Technology_News_cards_4";
import Technology_News_Card_5 from "../../menu_components/technology_news/Technology_News_cards_5";
import Technology_News_Card_6 from "../../menu_components/technology_news/Technology_News_cards_6";
import Technology_News_Card_7 from "../../menu_components/technology_news/Technology_News_cards_7";
export default function Technology_News_Main(){
    const style_copyright={
        color: localStorage.getItem("darkTheme") ? "ghostwhite" : "#1F1F1E",
    }
    const Technology_News_card_1 = NewsData.slice(24,25).map(item => {
        return (
            <Technology_News_Card_1
                key={item.id}
                {...item}
            />
        )
    })
    const Technology_News_card_2 = NewsData.slice(25,26).map(item => {
        return (
            <Technology_News_Card_2
                key={item.id}
                {...item}
            />
        )
    })
    const Technology_News_card_3 = NewsData.slice(27,28).map(item => {
        return (
            <Technology_News_Card_3
                key={item.id}
                {...item}
            />
        )
    })
    const Technology_News_card_4 = NewsData.slice(29,30).map(item => {
        return (
            <Technology_News_Card_4
                key={item.id}
                {...item}
            />
        )
    })
    const Technology_News_card_5 = NewsData.slice(31,32).map(item => {
        return (
            <Technology_News_Card_5
                key={item.id}
                {...item}
            />
        )
    })
    const Technology_News_card_6 = NewsData.slice(32,33).map(item => {
        return (
            <Technology_News_Card_6
                key={item.id}
                {...item}
            />
        )
    })
    const Technology_News_card_7 = NewsData.slice(33,34).map(item => {
        return (
            <Technology_News_Card_7
                key={item.id}
                {...item}
            />
        )
    })
    {
        return (
            <div>
                <main className="main_2">
                    <div className="child_element_2">

                        <h2 className="stories">
                            <span className="blank_space">a</span>
                            Stories for you
                        </h2>
                        {Technology_News_card_1}
                        {Technology_News_card_2}
                        {Technology_News_card_3}
                        {Technology_News_card_4}
                        {Technology_News_card_5}
                        {Technology_News_card_6}
                        {Technology_News_card_7}
                    </div>
                </main>
                <span className="copyright_1"
                      style={style_copyright}>© Copyright 2023/2024. All rights reserved!</span>
            </div>
        );
    }
}
