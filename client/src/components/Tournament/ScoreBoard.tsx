import * as React from 'react'
import { Table } from 'react-bootstrap'
import TeamResult from '../../models/TeamResult';
import ScoreBoardItem from './ScoreBoardItem';

interface ScoreBoardProps {
    results: Array<TeamResult>;
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
            {results.map((result, index) => <ScoreBoardItem index={index+1} result={result} key={result.team.id} />)}
        </tbody>
    </Table>
);

export default ScoreBoard;