import * as React from "react";
import Organisations from "./Organisations"

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export default class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return (<div><Organisations/></div>);
    }
}