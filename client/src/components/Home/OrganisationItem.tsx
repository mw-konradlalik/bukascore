import * as React from "react"
import { observer } from 'mobx-react';
import Organisation from "../../models/Organisation"
import { Panel, Row, Col, Button, Glyphicon } from 'react-bootstrap'
import CreateInput from '../Form/CreateInput'
import EditableInput from '../Form/EditableInput';
import GameList from "./GameList"
import { OrganisationState, GameListState } from '../../State';

interface OrganisationProps {
    organisation: Organisation,
    onDelete: (organisationId: number) => void;
    onEdit: (oraganisation: Organisation) => void;
}

const styles = {
    marginBottom: "10px"
}

@observer
export default class OrganisationItem extends React.Component<OrganisationProps, {}>{
    private readonly _organisationState: OrganisationState;
    private readonly _gameListState: GameListState;

    constructor(props: OrganisationProps) {
        super(props);

        this._organisationState = new OrganisationState(props.organisation);
        this._gameListState = new GameListState();

        this.renderHeader = this.renderHeader.bind(this);
        this.renderOptions = this.renderOptions.bind(this);
        this.renderNewGameForm = this.renderNewGameForm.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    renderOptions() {
        return (
            <div className="pull-right">
                <Button bsSize='xs'
                    disabled={this._organisationState.isEditable}
                    onClick={(e) => { this._organisationState.makeEditable(true); e.stopPropagation(); }}>
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
                        onSaveClick={(e, newValue) => {
                            e.stopPropagation();
                            this._organisationState.saveOrganisation(newValue)
                        }}
                        onCancelClick={(e: React.FormEvent<HTMLInputElement>) => {
                            e.stopPropagation(); this._organisationState.makeEditable(false);
                        }} />
                </div>
                {this._organisationState.isEditable ? null : this.renderOptions()}
            </div>
        );
    }
    renderAddNewGameButton() {
        return (
            <Button
                bsSize="xs"
                className="pull-right"
                onClick={this._gameListState.displayNewGameForm} >
                <Glyphicon glyph="plus" /> Add Game
                    </Button>
        );
    }

    renderNewGameForm() {
        return (
            <div style={styles}>
                <CreateInput
                    label="Game Name"
                    value={this._gameListState.newGameName}
                    onChange={this.onChange}
                    onSaveClick={() => this._gameListState.saveNewGame(this.props.organisation.id)}
                    onCancelClick={this._gameListState.closeNewGameForm} />
            </div>
        );
    }

    onChange(event: any) {
        this._gameListState.setNewGameName(event.target.value);
    }
    render() {
        return (
            <Panel eventKey={this.props.organisation.id}
                header={this.renderHeader()}
                collapsible >

                {this._gameListState.showNewGameForm ? this.renderNewGameForm() : null}
                
                <Row>
                    <Col xs={8}>
                        <GameList games={this.props.organisation.games} />
                    </Col>
                    <Col xs={4}>
                        {this._gameListState.showNewGameForm ? null : this.renderAddNewGameButton()}
                    </Col>
                </Row>

            </Panel>
        )
    }
} 