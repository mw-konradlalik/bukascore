import * as React from "react"
import Organisation from "../../models/Organisation"
import {Panel} from "react-bootstrap";
import GameList from "./GameList"

interface OrganisationProps { organisation: Organisation }

export default class OrganisationItem extends React.Component<OrganisationProps, {}>{
    render() {
        return (
            <Panel eventKey={this.props.organisation.id}
                    header={this.props.organisation.name}
                    collapsible >
                    <GameList games={this.props.organisation.games} />
            </Panel>            
        )
    }
} 