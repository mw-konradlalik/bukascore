import * as React from "react"
import {observer} from 'mobx-react'
import { Link } from 'react-router-dom'
import Game from "../../models/Game";
import { RouteComponentProps, Switch, Route } from 'react-router-dom';
import EditableInput from '../Form/EditableInput'
import { GameState } from '../../State'

@observer
export default class GameDetails extends React.Component<RouteComponentProps<{gameId: string}>, {}>{
    private _gameState = new GameState();
    
    constructor(props: RouteComponentProps<{gameId: string}>){
        super(props)
        this._gameState.setGame(parseInt(props.match.params.gameId))
    }

    componentWillReceiveProps(newProps: RouteComponentProps<{gameId: string}>) {
        if (newProps.match.params.gameId !== this.props.match.params.gameId) {
            this._gameState.setGame(parseInt(newProps.match.params.gameId))
        }
    }

    render() {
        return (
            <div>
                {this._gameState.game ? this._gameState.game.name : 'nie ma gry'}
                <EditableInput isEditable={true}
                    value={this._gameState.game ? this._gameState.game.name : ""}
                    onCancelClick={() => { }}
                    onSaveClick={() => { }}>
                </EditableInput>
            </div>
        );
    }
}