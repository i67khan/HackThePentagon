import React from 'react';
import '../styles/LandingPage.css';
import logo from '../studyBuddyLogo.png';
import { Link, Switch, Route,BrowserRouter as Router } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';

function LandingPage() {
    return (
        <Router>
        <header className="App-header">
            <div className='Images'>
                <img src={logo} className="App-logo" alt="logo" />
                <div className="Line-1" />
                <div className='Ellipses'>
                    <ellipse className="Ellipse-1" />
                    <ellipse className="Ellipse-2" />
                    <ellipse className="Ellipse-3" />
                    <ellipse className="Ellipse-4" />
                </div>
            </div>
            <div className='Titles'>
                <body className="Study-buddy">Study Buddy</body>
                <body className="Message">Connect with students who are taking the same courses</body>
            </div>
            <div className='Buttons'>

                <div className="Sign-up">
                    <Link to="/signup" className="Button-label">Sign Up</Link>
                </div>
                    <Link to="/login" className="Login">Login</Link>
            </div>

            <Switch>
                <Route exact path="/signup">
                    <SignUp />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
            </Switch>

        </header>
        </Router>
    );
}

export default LandingPage;