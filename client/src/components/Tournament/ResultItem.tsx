import * as React from 'react'
import Match from '../../models/Match'
import { TournamentStore } from '../../Store'
import Team from '../../models/Team';

const ResultItem: React.SFC<{ match: Match, homeTeamName: string, awayTeamName: string }> = 
    ({ match, homeTeamName, awayTeamName }) => (

    <tr>
        <td>{`${homeTeamName} - ${awayTeamName}`}</td>
        <td>{`${match.homeScore} - ${match.awayScore}`}</td>
    </tr>
);

export default ResultItem;