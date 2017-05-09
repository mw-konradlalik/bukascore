import * as React from "react"
import { observer } from 'mobx-react';
import Organisation from '../../models/Organisation';
import Store from '../../Store';
import OrganisationItem from './OrganisationItem'
import { Accordion, Panel } from 'react-bootstrap';

@observer
export default class OrganisationList extends React.Component<{}, {}>{
    constructor(props: {}, context: {}) {
        super(props, context);

        this.renderRow = this.renderRow.bind(this);
    }

    renderRow(org: Organisation) {
        return (
            <OrganisationItem key={org.id} organisation={org} />
        )
    }

    render() {
        return (
            <Panel header="Organisations">
                <Accordion>
                    {Store.organisations.map(this.renderRow)}
                </Accordion>
            </Panel>
        );
    }


}

