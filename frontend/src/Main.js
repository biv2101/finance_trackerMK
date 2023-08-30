import React from "react"
import "./Main.css"
export default function Main(props){
    const style_main= {
        backgroundColor: localStorage.getItem("darkTheme") ? "#1F1F1E" : "ghostwhite",
        color:localStorage.getItem("darkTheme") ? "ghostwhite" : "#1F1F1E",
    }
    const style_child_element={
        border:localStorage.getItem("darkTheme") ? "2px solid darkgoldenrod" : "2px solid goldenrod",
    }
    const style_copyright={
        color: localStorage.getItem("darkTheme") ? "ghostwhite" : "#1F1F1E",
    }
    return(
        <div>
        <main className="main" style={style_main}>
            <div className="child_element" style={style_child_element}>
                "We have also added the borders in the scroll panel areas.
                It will appear like highlighted portion Example below.
                In General, We have used many features in the HTML language, but the Scroll bar is one of the best features for crisping the data on the web page for displaying the contents.
                The above examples and points are in basics; meanwhile, we will have many advanced concepts and features in the HTML and CSS with Scroll bar options.
                The Latest Versions, HTML 5, and CSS 3, may add some options in the text scroll areas.
                We have also added the borders in the scroll panel areas.It will appear like highlighted portion Example below.
                In General, We have used many features in the HTML language, but the Scroll bar is one of the best features for crisping the data on the web page for displaying the contents.
                The above examples and points are in basics; meanwhile, we will have many advanced concepts and features in the HTML and CSS with Scroll bar options.
                The Latest Versions, HTML 5, and CSS 3, may add some options in the text scroll areas.
                We have also added the borders in the scroll panel areas.
                It will appear like highlighted portion Example below.
                In General, We have used many features in the HTML language, but the Scroll bar is one of the best features for crisping the data on the web page for displaying the contents.
                The above examples and points are in basics; meanwhile, we will have many advanced concepts and features in the HTML and CSS with Scroll bar options.
                The Latest Versions, HTML 5, and CSS 3, may add some options in the text scroll areas.
                We have also added the borders in the scroll panel areas.
                It will appear like highlighted portion Example below.
                In General, We have used many features in the HTML language, but the Scroll bar is one of the best features for crisping the data on the web page for displaying the contents.
                The above examples and points are in basics; meanwhile, we will have many advanced concepts and features in the HTML and CSS with Scroll bar options.
                The Latest Versions, HTML 5, and CSS 3, may add some options in the text scroll areas.
                In General, We have used many features in the HTML language, but the Scroll bar is one of the best features for crisping the data on the web page for displaying the contents.
                The above examples and points are in basics; meanwhile, we will have many advanced concepts and features in the HTML and CSS with Scroll bar options.
                The Latest Versions, HTML 5, and CSS 3, may add some options in the text scroll areas.
                We have also added the borders in the scroll panel areas.
                We have also added the borders in the scroll panel areas.
                It will appear like highlighted portion Example below.
                In General, We have used many features in the HTML language, but the Scroll bar is one of the best features for crisping the data on the web page for displaying the contents.
                The above examples and points are in basics; meanwhile, we will have many advanced concepts and features in the HTML and CSS with Scroll bar options.
                The Latest Versions, HTML 5, and CSS 3, may add some options in the text scroll areas.
                We have also added the borders in the scroll panel areas.
                It will appear like highlighted portion Example below.
                In General, We have used many features in the HTML language, but the Scroll bar is one of the best features for crisping the data on the web page for displaying the contents.
                The above examples and points are in basics; meanwhile, we will have many advanced concepts and features in the HTML and CSS with Scroll bar options.
                The Latest Versions, HTML 5, and CSS 3, may add some options in the text scroll areas.
                In General, We have used many features in the HTML language, but the Scroll bar is one of the best features for crisping the data on the web page for displaying the contents.
                The above examples and points are in basics; meanwhile, we will have many advanced concepts and features in the HTML and CSS with Scroll bar options.
                The Latest Versions, HTML 5, and CSS 3, may add some options in the text scroll areas.
                We have also added the borders in the scroll panel areas.
            </div>
        </main>
            <span className="copyright" style={style_copyright}>© Copyright 2023/2024. All rights reserved!</span>
        </div>
    )
}