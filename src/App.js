import React from 'react';
import './App.css';
import { Login } from './component/Login'
import TodoApp from './TodoApp';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import NavBar from './NavBar';


class App extends React.Component {



  LoggedIn(isLoggedI) {
    const LoginView = () => (
      <Login />
    );

    const About = () => (
      <div>
        <TodoApp />
      </div>
    );
    if (!isLoggedI) {
      return (<div>
        <ul>
          <li><Link to="/">Login</Link></li>
        </ul>
        <div>
          <Route exact path="/" component={LoginView} />
        </div>
      </div>);
    }
    else {
      return (
        <div>
          <ul>
            <li><Link to="/todo">Todo</Link></li>
          </ul>
          <div>
            <Route path="/todo" component={About} />
          </div>
        </div>);
    }
  }



  render() {
    if (localStorage.getItem('isLoggedin') === undefined) {
      localStorage.setItem('isLoggedin', false)
    }
    const isLoggedI = localStorage.getItem('isLoggedin')

    return (

      <Router>

        <div className="App">

          <NavBar></NavBar>
         
          {this.LoggedIn(isLoggedI)}
          


        </div>
      </Router>


    );
  }
}

export default App;
