import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard'
import Login from './pages/Login';
import Settings from './pages/Settings';
import SignUp from './pages/SignUp';
import Socials from './pages/Socials';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/socials" component={Socials} />
      </Router>
    </div>
  );
}
}

export default App;
