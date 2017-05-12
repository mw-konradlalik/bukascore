import * as React from "react"
import { Link } from 'react-router-dom'
import Game from "../../models/Game";

interface GameItemProps {
    game: Game;
}

export default class GameItem extends React.Component<GameItemProps, {}>{
    render() {
        return (
            <div>
                <Link to={`/home/${this.props.game.id}`}>
                    {this.props.game.name}
                </Link>
            </div>
        );
    }
}