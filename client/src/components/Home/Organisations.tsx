import * as React from "react"
import Games from "./Games"
import Organisation from '../../models/Organisation';
import Store from '../../Store';
import { observer } from 'mobx-react';

@observer
export default class Organisations extends React.Component<{}, {}>{
    constructor(props: {}, context: {}) {
        super(props, context);

        this.renderRow = this.renderRow.bind(this);
    }

    renderRow(org: Organisation) {
        return (
            <div>{org.name}</div>
        )
    }

    render(){
        return (
            <div>
                Organisations: 
                {Store.organisations.map(this.renderRow)}
            </div>
        );
    }


}