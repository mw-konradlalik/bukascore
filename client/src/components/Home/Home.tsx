import * as React from "react";
import {observer} from 'mobx-react'
import OrganisationList from "./OrganisationList"
import TournamentList from './TournamentList';
import HomeStore from '../../Store';
import { RouteComponentProps } from 'react-router-dom';

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
@observer
export default class Home extends React.Component<RouteComponentProps<{}>, undefined> {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <OrganisationList />
                    </div>
                    <div className="col-md-6">
                        <TournamentList  tournaments={HomeStore.activeTournaments}/>
                    </div>
                </div>                
            </div>);
    }
}