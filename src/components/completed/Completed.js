import React from 'react';
import { connect } from 'react-redux';
import './Completed.css';

import {ReDoTask, DeletedTask} from '../../actions/ToDo';

class Completed extends React.Component {
constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleDeleteChange = this.handleDeleteChange.bind(this);
}

    handleChange(e){
        console.log(e.currentTarget.dataset.id);
        const id = e.currentTarget.dataset.id;
        console.log(this.props);
        this.props.reDoTask(id);
    }
    handleDeleteChange(e){
        console.log(e.currentTarget.dataset.id);
        this.props.deletedToDo(e.currentTarget.dataset.id);
    }
    
    render() {
        console.log(this.props.data);
        return (
            <>

                <div className="completedTasks">
                    <h3>Completed Tasks:</h3>
                    {this.props.comp.map(a => (
                        <div className="task" key={a.id}>
                            <p>{a.text}</p>
                            <input type="checkbox" name="completed" value="completed" className="checkBox" data-id={a.id} onChange={this.handleChange} /> 
                            <input type="checkbox" name="deleted" value="deleted" className="checkBox" data-id={a.id} onChange={this.handleDeleteChange} />
                        </div>
                    ))}
                </div>

            </>
        )
    }

}
const mapStateToProps = state => ({
    comp: state.data.filter(a => (a.completed))
});
const mapDispatchToProps = dispatch => ({
    reDoTask: task => dispatch(ReDoTask(task)),
    deletedToDo: deletedId => dispatch(DeletedTask(deletedId))
});
export default connect(mapStateToProps, mapDispatchToProps)(Completed);

