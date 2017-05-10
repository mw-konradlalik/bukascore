import * as React from 'react';
import { observer } from 'mobx-react';
import Match from '../../models/Match'
import ResultItem from './ResultItem'
import { Table } from 'react-bootstrap'
import { TournamentStore } from '../../Store';

const MatchResults = observer<{ matches: Array<Match> }>(({ matches }) => (
    <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            {matches.map(m => <ResultItem key={m.id} match={m}
                homeTeam={TournamentStore.teams.find(t => t.id == m.homeTeamId)}
                awayTeam={TournamentStore.teams.find(t => t.id == m.awayTeamId)} />)}
        </tbody>

    </Table>
));

export default MatchResults;