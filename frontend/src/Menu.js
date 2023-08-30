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
    const style_menu_text={
        color:localStorage.getItem("darkTheme") ? "ghostwhite" : "#1F1F1E",
    }
    const style_sidebar={
        background:localStorage.getItem("darkTheme") ? "#1F1F1E" : "ghostwhite",
    }
    const style_sidebar_1={
        background:localStorage.getItem("darkTheme") ? "#1F1F1E" : "ghostwhite",
    }
    const style_sidebar_btn={
        filter:localStorage.getItem("darkTheme") ? "invert(1)" : "",
    }
    const style_input={
        background:localStorage.getItem("darkTheme") ? "#373735" : "lightgrey",
    }
    return(
        <div className="body">
            <div className={show ? `sidebar` : `sidebar_1`} style={show ? style_sidebar : style_sidebar_1}>
                <div className="logo_details" onClick={()=>setShow(!show)}>
                    <div className="menu_logo" style={style_menu_text}>
                        <div className="menu_text" style={style_menu_text}>Announcements</div>
                    </div>
                    <Drop_Down className='menu_icon' id="btn" style={style_sidebar_btn}/>
                </div>
                <ul className="nav_list">
                    <li>
                        <Search className='search_icon' style={style_sidebar_btn}/>
                        <input type="text" placeholder="Search..." style={style_input}/>
                        <span className="tooltip">Search</span>
                    </li>
                    <li>
                        <Link to="/latest_news">
                            <Document className='document_icon' style={style_sidebar_btn}/>
                            <span className="links_name" style={style_menu_text}>Latest News</span>
                        </Link>
                        <span className="tooltip">Latest News</span>
                    </li>
                    <li>
                        <Link to="/business">
                            <Dollar className='dollar_icon' style={style_sidebar_btn}/>
                            <span className="links_name" style={style_menu_text}>Business</span>
                        </Link>
                        <span className="tooltip">Business</span>
                    </li>
                    <li>
                        <Link to="/markets">
                            <Chart className='chart_icon' style={style_sidebar_btn}/>
                            <span className="links_name" style={style_menu_text}>Markets</span>
                        </Link>
                        <span className="tooltip">Markets</span>
                    </li>
                    <li>
                        <Link to="/technology">
                            <Bot className='bot_icon' style={style_sidebar_btn}/>
                            <span className="links_name" style={style_menu_text}>Technology</span>
                        </Link>
                        <span className="tooltip">Technology</span>
                    </li>
                    <li>
                        <Link to="/policy_and_regulations">
                            <Info className='info_icon' style={style_sidebar_btn}/>
                            <span className="links_name" style={style_menu_text}>Policy & Regulations</span>
                        </Link>
                        <span className="tooltip">Policy</span>
                    </li>
                </ul>
                <div className="profile_content" style={style_menu_text}>
                    <div className="profile" style={style_input}>
                        <div className="profile_details">
                            {localStorage.getItem("darkTheme")===true ? <Bitcoin_1 className="img_1"/> : <Bitcoin_2 className="img_3"/>}
                            <span className="circle_1"></span>
                                <div className="name_job">
                                    <div className="name">Finance -Tracker</div>
                                    <div className="job">Crypto & Stocks</div>
                                </div>
                        </div>
                        {show ? (localStorage.getItem("darkTheme")===true ? <Bitcoin_1 className="img_2"/> : <Bitcoin_2 className="img_4"/>) : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}