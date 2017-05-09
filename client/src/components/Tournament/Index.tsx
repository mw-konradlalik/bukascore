import * as React from 'react'
import {Panel} from 'react-bootstrap'
import ResultTable from './ResultTable';

const Index: React.SFC<{}> = ({ }) => (
    <div>
        Tournament: Nazwa sezonu
        Game: Nazwa rogrywak
    <Panel header="Results"> 
        <ResultTable />
    </Panel>
    </div>
);

export default Index;