import * as React from 'react'
import { FormControl, Button, Glyphicon, InputGroup } from 'react-bootstrap'

interface CreateInputProps {
    label: string,
    value: string,
    onChange: (event: any) => void,
    onSaveClick: (event: any) => void,
    onCancelClick: (event: any) => void,
}

const CreateInput: React.SFC<CreateInputProps> = (props) => (
    <InputGroup>
        <InputGroup.Addon>{props.label}</InputGroup.Addon>
        <FormControl type='text'
            value={props.value}
            onChange={props.onChange} >
        </FormControl>
        <InputGroup.Button>
            <Button onClick={props.onSaveClick}><Glyphicon glyph="ok" /></Button>
            <Button onClick={props.onCancelClick}>
                <Glyphicon glyph="remove" />
            </Button>
        </InputGroup.Button>
    </InputGroup>
);

export default CreateInput