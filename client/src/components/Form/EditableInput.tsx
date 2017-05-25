import * as React from 'react'
import { Form, FormGroup, FormControl, Button, Glyphicon, InputGroup } from 'react-bootstrap'

type ValueType = object | string | number | Date;

interface EditableInputProps {
    isEditable: boolean,
    value: ValueType,
    onSaveClick: (event: any, newValue: any) => void,
    onCancelClick: (event: any) => void
}

interface EditableInputState {
    valueCopy: ValueType;
}

class EditableInput extends React.Component<EditableInputProps, EditableInputState> {
    constructor(props: EditableInputProps) {
        super(props);

        this.state = {
            valueCopy: EditableInput.createValueCopy(props.value)
        }

        this.onChange = this.onChange.bind(this);
    }

    static createValueCopy(value: ValueType): ValueType {
        let valueCopy: ValueType = value;

        if (typeof value === 'string') {
            valueCopy = value.slice();
        } else if (typeof value === 'object') {
            valueCopy = Object.assign({}, value);
        } 

        return valueCopy;
    }

    onChange(event: any) {      
        this.setState({
            valueCopy: EditableInput.createValueCopy(event.target.value)
        })
    }

    render() {

        const { isEditable, value, onSaveClick, onCancelClick } = this.props;

        return (
            <div>
                {
                    isEditable
                        ? <DynamicValue
                            value={this.state.valueCopy}
                            onChange={this.onChange}
                            onSaveClick={onSaveClick}
                            onCancelClick={onCancelClick} />
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
    onSaveClick: (event: any, newValue: any) => void,
    onCancelClick: (event: any) => void
}>
    = ({ value, onChange, onSaveClick, onCancelClick }) => (
        <InputGroup>
            <FormControl type='text' autoFocus={true}
                value={value}
                onChange={onChange} >
            </FormControl>
            <InputGroup.Button>
                <Button onClick={(e) => { onSaveClick(e, value) }}><Glyphicon glyph="ok" /></Button>
                <Button onClick={onCancelClick}>
                    <Glyphicon glyph="share-alt" />
                </Button>
            </InputGroup.Button>
        </InputGroup>
    );

export default EditableInput;