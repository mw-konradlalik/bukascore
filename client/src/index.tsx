//import * as jQuery from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./components/Home/Home";
import TournamentDetails from './components/Tournament/TournamentDetails';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

const Index = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/tournament" component={TournamentDetails} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(
    <Index />,
    document.getElementById("app")
);