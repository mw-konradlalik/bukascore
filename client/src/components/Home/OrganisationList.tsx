import * as React from "react"
import { observer } from 'mobx-react';
import Organisation from '../../models/Organisation';
import Store from '../../Store';
import { OrganisationsState } from '../../State';
import OrganisationItem from './OrganisationItem'
import { Accordion, Panel, Button, Glyphicon, Well, Form, FormControl, FormGroup, ControlLabel, InputGroup, FormControlProps } from 'react-bootstrap';

@observer
export default class OrganisationList extends React.Component<{}, {}>{
    private readonly _organisationState: OrganisationsState = new OrganisationsState();

    constructor() {
        super();

        this.renderRow = this.renderRow.bind(this);
        this.renderAddNewOrganisation = this.renderAddNewOrganisation.bind(this);
        this.onAddNewOrganisationFormChange = this.onAddNewOrganisationFormChange.bind(this);
        //this.render = this.render.bind(this);
    }

    onAddNewOrganisationFormChange(event: React.FormEvent<HTMLInputElement>) {
        this._organisationState.setNewOrganisationName(event.currentTarget.value);
    }

    renderRow(org: Organisation) {
        return (
            <OrganisationItem key={org.id} organisation={org}
                onDelete={this._organisationState.removeOrganisation}
                onEdit={this._organisationState.editOrganisation} />
        )
    }

    renderAddNewOrganisation() {
        return (
            <Form>
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Addon>Organisation name</InputGroup.Addon>
                        <FormControl type='text'
                            name='newOrganisationName'
                            value={this._organisationState.newOrganisationName}
                            onChange={e => this.onAddNewOrganisationFormChange(e as any)} >
                        </FormControl>
                        <InputGroup.Button>
                            <Button onClick={this._organisationState.saveNewOrganisation}><Glyphicon glyph="ok" /></Button>
                            <Button onClick={this._organisationState.hideNewOrganisationForm}>
                                <Glyphicon glyph="remove" />
                            </Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
            </Form>
        )
    }
    render() {
        return (
            <Panel header={<div className="clearfix">
                <div className="pull-left">Organisations</div>
                <Button bsSize='xs'
                    className='pull-right'
                    onClick={this._organisationState.displayNewOrganisationForm}>
                    <Glyphicon glyph="plus" /> Add
                </Button>
            </div>}>

                {this._organisationState.showNewOrganisationForm ? this.renderAddNewOrganisation() : null}

                <Accordion>
                    {Store.organisations.map(this.renderRow)}
                </Accordion>
            </Panel>
        );
    }


}

