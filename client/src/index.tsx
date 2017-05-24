//import * as jQuery from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";
import DevTools from 'mobx-react-devtools';
import { useStrict } from 'mobx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home/Home";
import TournamentDetails from './components/Tournament/TournamentDetails';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

//useStrict(true);

const headerStyle = {
    height: "50px"
}

const Index = () => (
    <Router>
        <div id="root">
            <div style={headerStyle}></div>

            <Switch>
                <Route path="/tournament" component={TournamentDetails} />
                <Route path="/" component={Home} />
            </Switch>
            <DevTools />
        </div>
    </Router>
)

ReactDOM.render(
    <Index />,
    document.getElementById("app")
);