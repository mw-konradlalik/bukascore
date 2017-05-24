import * as React from 'react';
import Tournament from '../../models/Tournament'
import { Link } from 'react-router-dom';

interface TournamentItemProps {
    tournament: Tournament
}

export default class TournamentItem extends React.Component<TournamentItemProps, {}>{
    render() {
        return (
            <div>
                <Link to={`/tournament/${this.props.tournament.id}`}>{this.props.tournament.name}</Link>
            </div>
        )
    }
}