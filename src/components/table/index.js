import React from 'react';
import { removeTask, editTask, addTask } from '../../actions';
import { connect } from 'react-redux';
import Tasks from '../editForm';

 class Table extends React.Component {
    constructor(props) {
        super(props);

        this.tasks = [];
        this.state = {
            value: ''
        };
    }

    add = () => {
        const id = this.props.tasks.length + 1;
        const status = 'start';

        this.props.dispatch(addTask({ id, status, name: this.state.value }));
    }

    edit = (value,  id) => {
        this.props.dispatch(editTask(value, id));
    }

    remove = id => {
        this.props.dispatch(removeTask(id));
    }

     change = event => {
         event.persist();
         this.setState(() => ({ value: event.target.value }));
     }

    render() {
        return (<div>
            <div className='table'>
                <span>Id</span>
                <span>Name</span>
                <span>Status</span>
                <span>Actions</span>
                { this.props.tasks.map(({ id, name, status }) => (<Tasks key={id} id={id} name={name} status={status} remove={this.remove} edit={this.edit}/>))}
            </div>
            <input value={this.state.value} onChange={(event) => this.change(event)}/>
            <button onClick={() => this.add()}>
                Add task
            </button>
        </div>)
    }
}

export default connect((state) => ({ tasks: state.tasks }))(Table);
