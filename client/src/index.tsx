import * as jQuery from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';

import { Hello } from "./components/Hello";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <AppContainer>
        <Hello compiler="Typescript" framework="React" />
    </AppContainer>,
    document.getElementById("app")
);