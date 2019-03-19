import React from 'react';
import { connect } from 'react-redux';
import { DeletedTask } from '../../actions/ToDo';
import './Deleted.css';

class Deleted extends React.Component {

    handleChange(e, id) {
        this.props.deletedToDo(id);
    }

    render() {
        return (
            <>

                <div className="deletedTasks">
                    <h3>Deleted Tasks:</h3>
                    {this.props.data.map(a => (
                        <div className="task" key={a.id}>
                            <p>{a.text}</p>
                            <input type="checkbox" name="deleted" value="deleted" className="checkBox" onChange={(e) => this.handleChange(e, a.id)} />
                        </div>
                    ))}
                </div>

            </>
        )
    }
}
const mapStateToProps = state => ({
    data: state.data.filter(a => (a.deleted))
});

const mapDispatchToProps = dispatch => ({
    deletedToDo: deletedId => dispatch(DeletedTask(deletedId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Deleted);