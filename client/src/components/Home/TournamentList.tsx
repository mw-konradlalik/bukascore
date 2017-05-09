import * as React from "react"
import Tournament from '../../models/Tournament';
import TournamentItem from './TournamentItem';
import { Panel } from 'react-bootstrap';

interface TournamentListProps {
    tournaments: Array<Tournament>
}

export default class TournamentList extends React.Component<TournamentListProps, {}>{
    render() {
        return (
            <Panel header="Active tournaments">
                {this.props.tournaments.map(t => <TournamentItem tournament={t} key={t.id} />)}
            </Panel>
        );
    }
}