import { Component } from 'react';
import '../styles/Dashboard.css';

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
                    <div className="Add">
                        <body className="Plus">+</body>
                    </div>
                </header>
            </div>
        );
    }
}

export default Dashboard;
