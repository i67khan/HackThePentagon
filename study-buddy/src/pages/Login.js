import '../styles/Login.css';
import {Component} from 'react';

class Login  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "E: Email",
            password: "P: Password"
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            email: event.target.email,
            password: event.target.password
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="Login-box">
                        <body className="Welcome">Welcome Back</body>
                        <body className="Question"> Ready for another study session?</body>
                        <form action='/dashboard'>
                            <div className="f1">
                                <input type='text' className="Email" value={this.state.email} onChange={this.handleChange} />
                            </div>
                            <div className="f2">
                                <input type="text" className="Password" value={this.state.password} onChange={this.handleChange} />
                            </div>
                            <button className="Log-in-button">Log In</button>
                        </form>
                    </div>
                </header>
            </div>
        );
    }
}

export default Login;
