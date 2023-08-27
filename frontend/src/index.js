import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FAQ_Page from "./F.A.Q._Page";
import About_Page from "./About_Page";
import Contact_Page from "./Contact_Page";
import Log_in_Page from "./Log_in_Page";
import Sign_up_Page from "./Sign_up_Page";
import Latest_News from "./Latest_News"
import Business from "./Business"
import Markets from "./Markets"
import Technology from "./Technology";
import Policy_and_Regulations_Page from "./Policy_and_Regulations";
import reportWebVitals from './reportWebVitals';
import{
    createBrowserRouter,
    RouterProvider,
    Route
} from "react-router-dom";
const router=createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "f.a.g.",
        element: <FAQ_Page/>,
    },
    {
        path: "about",
        element: <About_Page/>,
    },
    {
        path: "contact",
        element: <Contact_Page/>,
    },
    {
        path: "log_in",
        element: <Log_in_Page/>,
    },
    {
        path: "sign_up",
        element: <Sign_up_Page/>,
    },
    {
        path: "latest_news",
        element: <Latest_News/>,
    },
    {
        path: "business",
        element: <Business/>,
    },
    {
        path: "markets",
        element: <Markets/>,
    },
    {
        path: "technology",
        element: <Technology/>,
    },
    {
        path: "policy_and_regulations",
        element: <Policy_and_Regulations_Page/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
