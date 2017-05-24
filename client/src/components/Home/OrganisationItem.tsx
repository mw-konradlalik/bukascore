import * as React from "react"
import { observer } from 'mobx-react';
import Organisation from "../../models/Organisation"
import { Panel, Button, Glyphicon } from "react-bootstrap";
import EditableInput from '../Form/EditableInput';
import GameList from "./GameList"
import { OrganisationState } from '../../State';

interface OrganisationProps {
    organisation: Organisation,
    onDelete: (organisationId: number) => void;
    onEdit: (oraganisation: Organisation) => void;
}

@observer
export default class OrganisationItem extends React.Component<OrganisationProps, {}>{
    private readonly _organisationState: OrganisationState;

    constructor(props: OrganisationProps) {
        super(props);

        this._organisationState = new OrganisationState(props.organisation);

        this.renderHeader = this.renderHeader.bind(this);
        this.renderOptions = this.renderOptions.bind(this);
    }

    renderOptions() {
        return (
            <div className="pull-right">
                <Button bsSize='xs'
                    disabled={this._organisationState.isEditable}
                    onClick={(e) => { this._organisationState.makeEditable(); e.stopPropagation(); }}>
                    <Glyphicon glyph="pencil" />
                </Button>
                <Button bsSize='xs'
                    disabled={this._organisationState.isEditable}
                    onClick={() => this.props.onDelete(this.props.organisation.id)}>
                    <Glyphicon glyph="remove" />
                </Button>
            </div>
        )
    }

    renderHeader() {
        return (
            <div className="clearfix">
                <div className="pull-left">
                    <EditableInput isEditable={this._organisationState.isEditable}
                        value={this.props.organisation.name}
                        //onChange={(e) => this._organisationState.setOrganisationName(e.currentTarget.value)}
                        //onSave={(e: React.FormEvent<HTMLInputElement>) => { e.stopPropagation() }}
                        onSave={(e, newValue) => { this._organisationState.setOrganisationName(newValue) }}
                        onCancel={(e: React.FormEvent<HTMLInputElement>) => { e.stopPropagation() }} />
                </div>
                {this._organisationState.isEditable ? null : this.renderOptions()}
            </div>
        );
    }

    render() {
        return (
            <Panel eventKey={this.props.organisation.id}
                header={this.renderHeader()}
                collapsible >
                <GameList games={this.props.organisation.games} />
            </Panel>
        )
    }
} 