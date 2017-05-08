import * as jQuery from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Hello compiler="Making" framework="React" />,
    document.getElementById("app")
);