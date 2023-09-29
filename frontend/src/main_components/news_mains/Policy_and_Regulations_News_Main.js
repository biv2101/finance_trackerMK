import React from "react";
import {useState} from "react";
import "../Main.css";
import Chart from "react-apexcharts";
import {NewsData} from "../News_info";
import Policy_and_Regulations_News_Card_1 from "../../menu_components/policy&regulations_news/Policy_and_Regulations_News_cards_1";
import Policy_and_Regulations_News_Card_2 from "../../menu_components/policy&regulations_news/Policy_and_Regulations_News_cards_2";
import Policy_and_Regulations_News_Card_3 from "../../menu_components/policy&regulations_news/Policy_and_Regulations_News_cards_3";
import Policy_and_Regulations_News_Card_4 from "../../menu_components/policy&regulations_news/Policy_and_Regulations_News_cards_4";
import Policy_and_Regulations_News_Card_5 from "../../menu_components/policy&regulations_news/Policy_and_Regulations_News_cards_5";
import Policy_and_Regulations_News_Card_6 from "../../menu_components/policy&regulations_news/Policy_and_Regulations_News_cards_6";
import Policy_and_Regulations_News_Card_7 from "../../menu_components/policy&regulations_news/Policy_and_Regulations_News_cards_7";
export default function Policy_and_Regulations_News_Main(){
    const style_copyright={
        color: localStorage.getItem("darkTheme") ? "ghostwhite" : "#1F1F1E",
    }
    const Policy_and_Regulations_News_card_1 = NewsData.slice(34,35).map(item => {
        return (
            <Policy_and_Regulations_News_Card_1
                key={item.id}
                {...item}
            />
        )
    })
    const Policy_and_Regulations_News_card_2 = NewsData.slice(35,36).map(item => {
        return (
            <Policy_and_Regulations_News_Card_2
                key={item.id}
                {...item}
            />
        )
    })
    const Policy_and_Regulations_News_card_3 = NewsData.slice(36,37).map(item => {
        return (
            <Policy_and_Regulations_News_Card_3
                key={item.id}
                {...item}
            />
        )
    })
    const Policy_and_Regulations_News_card_4 = NewsData.slice(37,38).map(item => {
        return (
            <Policy_and_Regulations_News_Card_4
                key={item.id}
                {...item}
            />
        )
    })
    const Policy_and_Regulations_News_card_5 = NewsData.slice(38,39).map(item => {
        return (
            <Policy_and_Regulations_News_Card_5
                key={item.id}
                {...item}
            />
        )
    })
    const Policy_and_Regulations_News_card_6 = NewsData.slice(39,40).map(item => {
        return (
            <Policy_and_Regulations_News_Card_6
                key={item.id}
                {...item}
            />
        )
    })
    const Policy_and_Regulations_News_card_7 = NewsData.slice(41,42).map(item => {
        return (
            <Policy_and_Regulations_News_Card_7
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
                        {Policy_and_Regulations_News_card_1}
                        {Policy_and_Regulations_News_card_2}
                        {Policy_and_Regulations_News_card_3}
                        {Policy_and_Regulations_News_card_4}
                        {Policy_and_Regulations_News_card_5}
                        {Policy_and_Regulations_News_card_6}
                        {Policy_and_Regulations_News_card_7}
                    </div>
                </main>
                <span className="copyright_1"
                      style={style_copyright}>© Copyright 2023/2024. All rights reserved!</span>
            </div>
        );
    }
}
