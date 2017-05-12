import * as React from "react";
import { observer } from 'mobx-react'
import OrganisationList from "./OrganisationList"
import TournamentList from './TournamentList';
import HomeStore from '../../Store';
import { HomeState } from '../../State';
import { RouteComponentProps, Switch, Route } from 'react-router-dom';

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
@observer
class Home extends React.Component<RouteComponentProps<{ gameId?: string }>, undefined> {
    private _homeState: HomeState = new HomeState();

    componentDidMount() {
        this._homeState.setGame(parseInt(this.props.match.params.gameId));
    }

    componentWillReceiveProps(newProps: RouteComponentProps<{ gameId?: string }>) {
        if (newProps.match.params.gameId !== this.props.match.params.gameId) {
            this._homeState.setGame(parseInt(newProps.match.params.gameId));
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <OrganisationList />
                    </div>
                    <div className="col-md-6">
                        <TournamentList tournaments={this._homeState.tournaments} header={this._homeState.tournamentListHeader} />
                    </div>
                </div>
            </div>);
    }
}

const HomeRoute: React.SFC<RouteComponentProps<{}>> = ({ match }) => (
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path={`/home/:gameId`} component={Home}></Route>
    </Switch>
)

export default HomeRoute;