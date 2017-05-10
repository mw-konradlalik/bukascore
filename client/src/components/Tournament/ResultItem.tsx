import * as React from 'react'
import Match from '../../models/Match'
import {TournamentStore} from '../../Store'
import Team from '../../models/Team';

const ResultItem: React.SFC<{match: Match, homeTeam: Team, awayTeam: Team}> = ({match, homeTeam, awayTeam}) => (

        <tr>
            <td>{`${homeTeam ? homeTeam.name : ''} - ${awayTeam ? awayTeam.name : ''}`}</td>
            <td>{`${match.homeScore} - ${match.awayScore}`}</td>
        </tr>
);

export default ResultItem;