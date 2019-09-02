import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './TodoList';
import { Login } from './component/Login'
import TodoApp from './TodoApp';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import NavBar from './NavBar';


class App extends React.Component {

  constructor(props){
    super(props);
  }

  LoggedIn(isLoggedIn){
    if (!isLoggedIn){
        return  <li><Link to="/">Login</Link></li>;
    }
    else{
        return <li><Link to="/todo">Todo</Link></li>;
    }
  }
    


  render(){  

    const isLoggedIn = false; 
    return (
      <div className="App">
        <Router>
          <div className="App">
            <NavBar></NavBar>
      
            <br />
            <br />

            <ul>
              {this.LoggedIn(isLoggedIn)}
            </ul>

            <div>
              <Route exact path="/" component={Login} />
              <Route path="/todo" component={TodoApp} />
            </div>
          </div>
        </Router>


      </div>
    );
  }
}

export default App;
