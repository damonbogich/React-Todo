import React from 'react';

class ToDoForm extends React.Component {
    //constructor with state
    constructor() {
        super();
        this.state = {
            toDoText: ''
        };
    }

    handleChanges = e => {
        // update state with each keystroke
        this.setState({
          toDoText: e.target.value
        });
      };

       // class property to submit form
    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.toDoText);
    };

    render() {
        return (
            <div>
            <form onSubmit = {this.handleSubmit}>
                <input
                    type = "text"
                    name = "item"
                    value={this.state.toDoText}
                    onChange={this.handleChanges}
                />
                <button>Add ToDo</button>
                
            </form>
            <button onClick = {this.props.clearCompleted}>Clear Completed</button>
            </div>
        )
    }
}

export default ToDoForm;