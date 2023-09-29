import React from "react";
import {useState} from "react";
import "../Main.css";
import Chart from "react-apexcharts";
import {NewsData} from "../News_info";
import Markets_News_Card_1 from "../../menu_components/markets_news/Markets_News_cards_1";
import Markets_News_Card_2 from "../../menu_components/markets_news/Markets_News_cards_2";
import Markets_News_Card_3 from "../../menu_components/markets_news/Markets_News_cards_3";
import Markets_News_Card_4 from "../../menu_components/markets_news/Markets_News_cards_4";
import Markets_News_Card_5 from "../../menu_components/markets_news/Markets_News_cards_5";
import Markets_News_Card_6 from "../../menu_components/markets_news/Markets_News_cards_6";
import Markets_News_Card_7 from "../../menu_components/markets_news/Markets_News_cards_7";
export default function Markets_News_Main(){
    const style_copyright={
        color: localStorage.getItem("darkTheme") ? "ghostwhite" : "#1F1F1E",
    }

    const Markets_News_card_1 = NewsData.slice(15,16).map(item => {
        return (
            <Markets_News_Card_1
                key={item.id}
                {...item}
            />
        )
    })
    const Markets_News_card_2 = NewsData.slice(16,17).map(item => {
        return (
            <Markets_News_Card_2
                key={item.id}
                {...item}
            />
        )
    })
    const Markets_News_card_3 = NewsData.slice(17,18).map(item => {
        return (
            <Markets_News_Card_3
                key={item.id}
                {...item}
            />
        )
    })
    const Markets_News_card_4 = NewsData.slice(18,19).map(item => {
        return (
            <Markets_News_Card_4
                key={item.id}
                {...item}
            />
        )
    })
    const Markets_News_card_5 = NewsData.slice(19,20).map(item => {
        return (
            <Markets_News_Card_5
                key={item.id}
                {...item}
            />
        )
    })
    const Markets_News_card_6 = NewsData.slice(21,22).map(item => {
        return (
            <Markets_News_Card_6
                key={item.id}
                {...item}
            />
        )
    })
    const Markets_News_card_7 = NewsData.slice(23,24).map(item => {
        return (
            <Markets_News_Card_7
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
                        {Markets_News_card_1}
                        {Markets_News_card_2}
                        {Markets_News_card_3}
                        {Markets_News_card_4}
                        {Markets_News_card_5}
                        {Markets_News_card_6}
                        {Markets_News_card_7}
                    </div>
                </main>
                <span className="copyright_1"
                      style={style_copyright}>© Copyright 2023/2024. All rights reserved!</span>
            </div>
        );
    }
}
