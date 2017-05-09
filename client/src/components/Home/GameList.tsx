import * as React from "react"
import Game from "../../models/Game";
import GameItem from './GameItem';

interface GameListProps {
    games: Array<Game>;
}

export default class GameList extends React.Component<GameListProps, {}>{
    render(){
        return (
            <div>
                {this.props.games.map(g => <GameItem game={g} key={g.id} />)}
            </div>
        );
    }
}