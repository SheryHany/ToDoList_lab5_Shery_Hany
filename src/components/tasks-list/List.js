import React from 'react';

// import {Card} from 'react-bootstrap';
//style
import './List.css';
import { connect } from 'react-redux';

import { CompletedToDo, DeletedTask } from '../../actions/ToDo';


class List extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, id) {
        if (e.target.value === "completed") {
            this.props.completedToDo(id);
        } else {
            this.props.deletedToDo(id);
        }
            // this.props.completedToDo(id);
    }
    // test(e, id){
    //     // debugger
        
    //     console.log("hi dele");
    //     console.log(this.props.deletedToDo(id));
    //     this.props.deletedToDo(id);
    // }

    render() {
        console.log(this.props.data);
        return (
            <div className="mycard">
                <br />
                <>
                    <h3>TO Do Tasks: </h3>
                    {
                        this.props.data.map(a => (
                            <div key={a.id} className="form">
                                <p>{a.text}</p>
                                <input type="checkbox" name="completed" value="completed" className="checkBox" onChange={(e) => this.handleChange(e, a.id)} />
                                <input type="checkbox" name="deleted" value="deleted" className="checkBox" onChange={(e) => this.handleChange(e, a.id)} />
                            </div>
                        ))
                    }
                </>

            </div>
        )
    }
} 
const mapStateToProps = state => ({
    data: state.data.filter(a => !(a.completed || a.deleted))
});

const mapDispatchToProps = dispatch => ({
    completedToDo: completedId => dispatch(CompletedToDo(completedId)),
    deletedToDo: deletedId => dispatch(DeletedTask(deletedId))
});

// mapDispatchToProps = dispatch => ({
//     deletedToDo: deletedId => dispatch(DeletedTask(deletedId)),
// });

export default connect(mapStateToProps, mapDispatchToProps)(List);








