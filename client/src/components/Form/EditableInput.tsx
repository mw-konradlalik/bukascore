import * as React from 'react'
import { Form, FormGroup, FormControl, Button, Glyphicon, InputGroup } from 'react-bootstrap'

interface EditableInputProps {
    isEditable: boolean,
    value: any,
    //onChange: (event: any) => void
    onSave: (event: any, newValue: any) => void,
    onCancel: (event: any) => void
}

interface EditableInputState {


    valueCopy: any;
}

class EditableInput extends React.Component<EditableInputProps, EditableInputState> {
    constructor(props: EditableInputProps) {
        super(props);

        this.state = {
            valueCopy: props.value.slice()
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(event: any) {
        this.setState({
            valueCopy: event.target.value
        })
    }

    render() {

        const { isEditable, value, onSave, onCancel } = this.props;

        return (
            <div>
                {
                    isEditable
                        ? <DynamicValue value={this.state.valueCopy} onChange={this.onChange} onSave={onSave} onCancel={onCancel} />
                        : <StaticValue value={value} />
                }
            </div>
        );
    }
}

const StaticValue: React.SFC<{ value: any }> = ({ value }) => (
    <div>
        {value}
    </div>
);

const DynamicValue: React.SFC<{
    value: any,
    onChange: (event: any) => void,
    onSave: (event: any, newValue: any) => void,
    onCancel: (event: any) => void
}>
    = ({ value, onChange, onSave, onCancel }) => (
        <InputGroup>
            <FormControl type='text' autoFocus={true}
                value={value}
                onChange={onChange} >
            </FormControl>
            <InputGroup.Button>
                <Button onClick={(e) => { onSave(e, value) }}><Glyphicon glyph="ok" /></Button>
                <Button onClick={onCancel}>
                    <Glyphicon glyph="share-alt" />
                </Button>
            </InputGroup.Button>
        </InputGroup>
    );

export default EditableInput;