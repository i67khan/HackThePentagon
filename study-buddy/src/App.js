import React, {Component} from 'react';
import logo from './studyBuddyLogo.png';
import './App.css';
import config from './config'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
}

export default App;
