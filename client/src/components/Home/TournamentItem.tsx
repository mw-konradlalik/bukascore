import * as React from 'react';
import Tournament from '../../models/Tournament'

interface TournamentItemProps{
    tournament: Tournament
}

export default class TournamentItem extends React.Component<TournamentItemProps, {}>{
    render(){
        return (
            <div>{this.props.tournament.name}</div>
        )
    }
}