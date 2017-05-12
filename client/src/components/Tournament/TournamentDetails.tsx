import * as React from 'react'
import { observer } from 'mobx-react';
import { Panel, Grid, Row, Col } from 'react-bootstrap'
import ScoreBoard from './ScoreBoard';
import { Route, Switch, RouteComponentProps } from 'react-router-dom'
import { TournamentStore } from '../../Store';
import MatcheResults from './MatchResults'

@observer
class TournamentDetails extends React.Component<RouteComponentProps<{ tournamentId: number }>, {}> {
    constructor(props: any, context: any) {
        super(props, context);

        TournamentStore.setCurrentTournament(this.props.match.params.tournamentId);
    }

    renderTournamentDetails() {
        return (
            <Grid fluid>
                <Row>
                    <Col md={6}><h1>Sezon: {TournamentStore.currentTournament ? TournamentStore.currentTournament.name : ''} </h1></Col>
                    <Col md={6}><h1>Rozgrywki: {TournamentStore.gameForTournament ? TournamentStore.gameForTournament.name : ''} </h1></Col>
                </Row>
                <Row>
                    <Col md={6}><ScoreBoard results={TournamentStore.tournamentResults} /></Col>
                    <Col md={6}><MatcheResults matches={TournamentStore.recentMatches} /></Col>
                </Row>
            </Grid>
        );
    }

    render() {
        return (
            TournamentStore.currentTournament !== null ? this.renderTournamentDetails() : <div>Loading</div>
        )
    }
}

const TournamentRoute: React.SFC<RouteComponentProps<{}>> = ({ match }) => (
    <Switch>
        <Route exact path={`${match.url}/:tournamentId`} component={TournamentDetails}></Route>
    </Switch>
);

export default TournamentRoute;