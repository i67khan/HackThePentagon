import React, { Component } from 'react';
import '../styles/LandingPage.css';
import logo from '../studyBuddyLogo.png';


class LandingPage extends Component {
    
    constructor(props) {
        super(props);   
        this.state = {};
      }

    render() {
        return (
                <header className="App-header">
                    <div className='Images'>
                        <img src={logo} className="App-logo" alt="logo" />
                        <div className="Line-1" />
                        <div className='Ellipses'>
                            <ellipse className="Ellipses-1" />
                            <ellipse className="Ellipses-2" />
                            <ellipse className="Ellipses-3" />
                            <ellipse className="Ellipses-4" />
                        </div>
                    </div>
                    <div className='Titles'>
                        <body className="Study-buddy">Study Buddy</body>
                        <body className="Message">Connect with students who are taking the same courses</body>
                    </div>
                    <div className='Buttons'>

                        <div className="Sign-up">
                            <a href="/signup" className="Button-label">Sign Up</a>
                        </div>
                        <a href="/login" className="Login">Login</a>
                    </div>               

                </header>
        );
    }
}

export default LandingPage;