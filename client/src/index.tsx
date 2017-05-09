//import * as jQuery from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from "./components/Home/Home";
import Tournament from './components/Tournament/Index';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

const Index = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/tournament" component={Tournament} />
        </div>
    </Router>
)

ReactDOM.render(
    <Index />,
    document.getElementById("app")
);