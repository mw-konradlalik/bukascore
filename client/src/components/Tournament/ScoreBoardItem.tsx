import * as React from 'react'
import TeamTournamentResult from '../../models/TeamTournamentResult';

interface ScoreBoardItemProps {
    index: number;
    result: TeamTournamentResult;
}

const ScoreBoardItem: React.SFC<ScoreBoardItemProps> = ({ index, result }) => (
    <tr>
        <td>{index}</td>
        <td>{result.teamName}</td>
        <td>{result.wins}</td>
        <td>{result.looses}</td>
        <td>{result.draws}</td>
        <td>{result.points}</td>
    </tr>
);

export default ScoreBoardItem;