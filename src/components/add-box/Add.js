import React from 'react';
//for validate
import SimpleSchema from 'simpl-schema';
//style
import './Add.css';
//components from bootstrap
import { Form, Button } from 'react-bootstrap';
import uuidv1 from 'uuid';
import { connect } from 'react-redux';
//action
import { AddToDo } from '../../actions/ToDo';
import { error } from 'util';

class Add extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        const input = e.target[0].value;
        const validationContext = new SimpleSchema({
            input: {
                type: String,
                optional: false,
                min: 2,
            }
        }).newContext();
        validationContext.validate({ input });
        if(validationContext.isValid()){
            const myState = {
                text: input,
                id: uuidv1(),
                completed: false,
                deleted: false,
            }
    
            this.props.setToDo(myState);
            const input2 = e.target[0].value = '';
        }

        console.log(validationContext.validationErrors());
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <br />
                <Form.Control type="task" placeholder="Add Task..." className="txtBox" onChange={this.handleChange} /><br />
                <Button variant="primary" type="submit">
                    Add
                </Button>
                <br />
            </Form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setToDo: data => dispatch(AddToDo(data)),
});

export default connect(null, mapDispatchToProps)(Add);