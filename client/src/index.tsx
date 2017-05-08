import * as jQuery from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";

import Home from "./components/Home/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Home compiler="Making" framework="React" />,
    document.getElementById("app")
);