import * as React from "react"
import Game from "../../models/Game";

interface GameItemProps {
    game: Game;
}

export default class GameItem extends React.Component<GameItemProps, {}>{
    render(){
        return (
            <div>
                {this.props.game.name}
            </div>
        );
    }
}