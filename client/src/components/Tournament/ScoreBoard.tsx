import * as React from 'react'
import { Table } from 'react-bootstrap'
import TeamTournamentResult from '../../models/TeamTournamentResult';
import ScoreBoardItem from './ScoreBoardItem';

interface ScoreBoardProps {
    results: Array<TeamTournamentResult>;
}

const ScoreBoard : React.SFC<ScoreBoardProps> = ({ results }) => (
    <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>Team</th>
                <th>Wins</th>
                <th>Looses</th>
                <th>Draws</th>
                <th>Points</th>
            </tr>
        </thead>
        <tbody>
            {results.map((result, index) => <ScoreBoardItem index={index+1} result={result} key={result.teamId} />)}
        </tbody>
    </Table>
);

export default ScoreBoard;