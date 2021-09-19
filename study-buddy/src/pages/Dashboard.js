import { Component } from 'react';
import '../styles/Dashboard.css';
import API from '../MapsAPI.PNG';
import Stock from '../Stock-guy.png';
class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <body className="Welcome-dash">Welcom Ibrahim,</body>
                    <body className="You-dash">You are taking</body>
                    <div className="Course">
                        <body className="CS245">CS245</body>
                    </div>
                    <a href="/socials"><img src={Stock} className="Profile" /></a>
                    <div className="Add">
                        <body className="Plus">+</body>
                    </div>
                    <img className="Pic" src={API}></img>
                </header>
            </div>
        );
    }
}

export default Dashboard;
