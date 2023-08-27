import React from "react";
import "./Menu.css";
import {ReactComponent as Drop_Down} from "./Drop_Down.svg";
import {ReactComponent as Search} from "./Search.svg";
import {ReactComponent as Document} from "./Documents.svg";
import {ReactComponent as Dollar} from "./Dollar.svg";
import {ReactComponent as Chart} from "./Chart.svg";
import {ReactComponent as Bot} from "./Bot.svg";
import {ReactComponent as Info} from "./Info.svg";
import {ReactComponent as Bitcoin_1} from "./Bitcoin_1.svg";
import {ReactComponent as Bitcoin_2} from "./Bitcoin_2.svg";
import {Link} from "react-router-dom";
export default function Menu(props){
    const [show, setShow]=React.useState(false);
    return(
        <div className="body">
            <div className={show ? `sidebar` : `sidebar_1`}>
                <div className="logo_details" onClick={()=>setShow(!show)}>
                    <div className="menu_logo">
                        <div className="menu_text">Announcements</div>
                    </div>
                    <Drop_Down className='menu_icon' id="btn"/>
                </div>
                <ul className="nav_list">
                    <li>
                        <Search className='search_icon'/>
                        <input type="text" placeholder="Search..."/>
                        <span className="tooltip">Search</span>
                    </li>
                    <li>
                        <Link to="/latest_news">
                            <Document className='document_icon'/>
                            <span className="links_name">Latest News</span>
                        </Link>
                        <span className="tooltip">Latest News</span>
                    </li>
                    <li>
                        <Link to="/business">
                            <Dollar className='dollar_icon'/>
                            <span className="links_name">Business</span>
                        </Link>
                        <span className="tooltip">Business</span>
                    </li>
                    <li>
                        <Link to="/markets">
                            <Chart className='chart_icon'/>
                            <span className="links_name">Markets</span>
                        </Link>
                        <span className="tooltip">Markets</span>
                    </li>
                    <li>
                        <Link to="/technology">
                            <Bot className='bot_icon'/>
                            <span className="links_name">Technology</span>
                        </Link>
                        <span className="tooltip">Technology</span>
                    </li>
                    <li>
                        <Link to="/policy_and_regulations">
                            <Info className='info_icon'/>
                            <span className="links_name">Policy & Regulations</span>
                        </Link>
                        <span className="tooltip">Policy</span>
                    </li>
                </ul>
                <div className="profile_content">
                    <div className="profile">
                        <div className="profile_details">
                            {props.value==="light" ? <Bitcoin_1 className="img_1"/> : <Bitcoin_2 className="img_3"/>}
                            <span className="circle_1"></span>
                                <div className="name_job">
                                    <div className="name">Finance -Tracker</div>
                                    <div className="job">Crypto & Stocks</div>
                                </div>
                        </div>
                        {show ? (props.value==="light" ? <Bitcoin_1 className="img_2"/> : <Bitcoin_2 className="img_4"/>) : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}