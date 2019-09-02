import React from 'react';
import { TodoList } from './TodoList'

import Button from '@material-ui/core/Button';
import NavBar from './NavBar'
import TextField from '@material-ui/core/TextField';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import { Login } from './component/Login'





class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { todoList: [], text: '', priority: 0, dueDate: moment() };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  render() {

    return (
      <div>
      <div>
        <h3>TODO 1</h3>
        <form onSubmit={this.handleSubmit}>

          <TextField
            id="new-todo"
            label="Text"
            margin="normal"
            type="text"
            onChange={this.handleTextChange}
            value={this.state.text}
          />


          <TextField
            id="new-priority"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
            onChange={this.handlePriorityChange}
            value={this.state.priority}
          />



          <DatePicker
            id="due-date"
            placeholderText="Due date"
            selected={this.state.dueDate}
            onChange={this.handleDateChange}>

          </DatePicker>

          <br></br>

          <br></br>

          <center>
            <Button type="submit" variant="contained" color="primary">
              {"Submit " + (this.state.todoList.length)}
            </Button>
          </center>
        </form>
     
        <TodoList tdList={this.state.todoList} />
      </div>
      <div>
        <Button variant="contained" color="secondary" onClick={this.logout}  >
          Logout
        </Button>
      </div>
      </div>
    );
  }

  logout() {
    //localStorage.clear();
    console.log("aja" + localStorage);
    localStorage.removeItem("isLoggedin");
    window.location.reload();
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handlePriorityChange(e) {
    this.setState({
      priority: e.target.value
    });
  }

  handleDateChange(date) {
    this.setState({
      dueDate: date
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
