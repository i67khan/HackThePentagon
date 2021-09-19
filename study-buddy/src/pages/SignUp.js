import '../styles/SignUp.css';
import { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: "N: Your Name",
            email: "E: Email",
            password: "P: Password",
            school: "Select your school"
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ 
            names: event.target.names,
            email: event.target.email,
            password: event.target.password,
            school: event.target.school
         });
    }
    
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className='Ellipses'>
                        <ellipse className="Ellipse-1" />
                        <ellipse className="Ellipse-2" />
                        <ellipse className="Ellipse-3" />
                        <ellipse className="Ellipse-4" />
                        <ellipse className="Ellipse-5" />
                    </div>
                    <div className='Sign-up-box'>
                        <body className="Create-acc">Create your Account</body>
                        <body className="Sub-heading">One step closer to joining our community</body>
                        <form action='/dashboard'>
                            <div className="fb-1">
                                <input type='text' className="Name" value={this.state.names} onChange={this.handleChange} />
                            </div>
                            <div className="fb-2">
                                <input type="text" className="Email" value={this.state.email} onChange={this.handleChange} />
                            </div>
                            <div className="fb-3">
                                <input type='text' className="Password" value={this.state.password} onChange={this.handleChange}/>
                            </div>
                            <div className="fb-4">
                                <input type='text' className="School" value={this.state.school} onChange={this.handleChange}/>

                            </div>

                            <button className="Sign-up-button">Sign Up</button>
                        </form>
                    </div>
                </header>
            </div>
        );
    }
}

export default SignUp;
