import React from 'react';

import Header from './header/Header';
import Footer from './footer/Footer';
import Content from './content/Content';

import {BrowserRouter as Router} from "react-router-dom";

function ApplicationRouter() {

    const value = [
        {
            "url" : "/dashboard",
            "label" : "Dashboard"
        }
    ]

    return (
        <Router>
            <Header value={value}/>
            <Content/>
            <Footer/>
        </Router>
    );          
}
 
export default ApplicationRouter;