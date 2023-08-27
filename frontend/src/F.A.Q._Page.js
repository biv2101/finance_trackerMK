import React from "react";
import "./F.A.Q._Page.css"
import {ReactComponent as Chevron} from "./Chevron.svg";
import {ReactComponent as Chevron_up} from "./Chevron_Up.svg";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function FAQ_Page(){
    const[selected, setSelected]=useState(null);
    const toggle = (i) => {
        if(selected === i){
            return setSelected(null);
        }
        setSelected(i);
    }
    const Home_style={
        textDecoration: 'none',
        paddingLeft: 50,
    }
    return(
        <div className="faq_body">
            <div className="faq_accordion">
                <div className="image_box">
                    <img src={require('./questionmarks.png')} className="faq_image" alt="faq_picture"/>
                </div>
                <div className="faq_accordion_text">
                    <div className="faq_title">FAQ</div>
                    <div className="faq_wrapper">
                        <div className="accordion">
                            {data.map((item, i)=>(
                                <div className="faq_item">
                                    <div className="faq_Title" onClick={()=>toggle(i)}>
                                        <h2>{item.question}</h2>
                                        <span>{selected === i ? <Chevron_up className="faq_chevron_up"/> : <Chevron className="faq_chevron"/>}</span>
                                    </div>
                                    <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Link style={Home_style} to="/" id="home_button">Home</Link>
            </div>
        </div>
    )
}
const data=[
    {
        question:'What is crypto',
        answer:'Cryptocurrency is a digital payment system that doesn\'t rely on banks to verify transactions. It’s a peer-to-peer system that can enable anyone anywhere to send and receive payments.'
    },
    {
        question:'How to buy cryptocurrency',
        answer:'Visit a crypto exchange website, create an account and verify your identity as required, follow the website\'s instructions to buy your crypto assets such as Bitcoin (BTC) and Ether (ETH), your purchased cryptocurrency will appear in your exchange account.'
    },
    {
        question:'What is crypto mining',
        answer:'Bitcoin mining refers to the process where a global network of computers running the Bitcoin code work to ensure that transactions are legitimate and added correctly to the cryptocurrency\'s blockchain.'
    },
    {
        question:'What is the P/E ratio',
        answer:'Stocks are often priced and compared based on their price-to-earnings ratio (P/E ratio). That is how much you are paying for a share compared to how much that share has proven to earn.'
    },
    {
        question:'What is the market cap?',
        answer:'The market cap is the total "value" of the company based on the number of shares. So, if there were 1,000 shares issued at $100, the company would have a market cap of $100,000.'
    },
]