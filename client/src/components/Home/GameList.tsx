import * as React from "react"
import Game from "../../models/Game";
import Organisation from '../../models/Organisation';
import GameItem from './GameItem';
import { GameListState } from '../../State';
import { observer } from 'mobx-react'

interface GameListProps {
    games: Array<Game>
}

@observer
export default class GameList extends React.Component<GameListProps, {}>{
    render() {
        return (
            <div>
                {this.props.games.map(g => <GameItem game={g} key={g.id} />)}
            </div>
        );
    }
}