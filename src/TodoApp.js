import React from 'react';
import { TodoList } from './TodoList'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";




class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { todoList: [], text: '', priority: 0, dueDate: moment()  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO 1</h3>
        <TodoList tdList={this.state.todoList} />
        <form onSubmit={this.handleSubmit}>
          
          <TextField
            id="new-todo"
            label="Text"
            margin="normal"
            onChange={this.handleChange}
            value={this.state.text}
          />
           <br />
           <br />
          <TextField
            id="new-priority"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
            onChange={this.handleChange}
            value={this.state.priority}
          />

          <br />
          <br />

          <DatePicker
            id="due-date"
            placeholderText="Due date"
            selected = 
            {this.state.dueDate 
              ? moment(this.state.dueDate, 'DD-MM-YYYY') : null}
            onChange={this.handleChange}>
            
          </DatePicker>

          <br />
          <br />

          <Button type="submit" variant="contained" color="primary" >
            {"Submit " +this.state.todoList.length + 1}
          </Button>


        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: document.getElementById('new-todo').value });
    this.setState({ priority: document.getElementById('new-priority').value });
    this.setState({
      dueDate: document.getElementById('due-date').value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      dueDate: this.state.dueDate,
      priority: this.state.priority,
      id: Date.now()
    };
    this.setState(prevState => ({
      todoList: prevState.todoList.concat(newItem),
      text: ''
    }));
  }
}


export default TodoApp;
