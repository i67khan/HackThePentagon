import { Component } from 'react';
import '../styles/Dashboard.css';
import API from '../MapsAPI.PNG';
import Stock from '../usermans.jpg';
class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <body className="Welcome-dash">Welcome Christine,</body>
                    <body className="You-dash">You are taking</body>
                    <div className="Course">
                        <body className="CS245">CS245</body>
                    </div>
                    <a href="/socials"><img src={Stock} className="Profile" /></a>
                    <div className="Add">
                        <body className="Plus">+</body>
                    </div>
                    <img className="Pic" src={API}></img>
                    <body className="Remember">You can access your social information by clicking on your profile.</body>
                </header>
            </div>
        );
    }
}

export default Dashboard;
