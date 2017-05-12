import * as React from 'react'
import TeamResult from '../../models/TeamResult';

interface ScoreBoardItemProps {
    index: number;
    result: TeamResult;
}

const ScoreBoardItem: React.SFC<ScoreBoardItemProps> = ({ index, result }) => (
    <tr>
        <td>{index}</td>
        <td>{result.team.name}</td>
        <td>{result.wins}</td>
        <td>{result.losses}</td>
        <td>{result.draws}</td>
        <td>{result.points}</td>
    </tr>
);

export default ScoreBoardItem;