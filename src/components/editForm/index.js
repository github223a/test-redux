import React from 'react';

 export default class Tasks extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isEdit: false,
            value: ''
        }
    }

    submit = (event, id) => {
        event.preventDefault(); // чтобы не перегружалась страница
        this.props.edit(this.state.value, id);
        this.setState(() => ({ isEdit: false }));
    }

    edit = () => {
        this.setState(() => ({
            isEdit: true
        }));
    }

    change = event => {
        event.persist();
        this.setState(() => ({ value: event.target.value }));
    }

    render() {
        const { id, name, status } = this.props;
        return <div>
                <span>{id}</span>
                <span>{name}</span>
                <span>{status}</span>
                {this.state.isEdit && <form onSubmit={(event) => this.submit(event, id)}>
                    <input value={this.state.value} onChange={(event) => this.change(event)}/>
                    <button type="submit">Save</button>
                </form>}
                <div>
                    <button onClick={() => this.edit()}>
                        Edit
                    </button>
                    <button onClick={() => this.props.remove(id)}>
                        Remove
                    </button>
                </div>
        </div>
    }
}

