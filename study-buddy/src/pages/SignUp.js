import '../styles/SignUp.css';

function SignUp() {
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

                    <div className="fb-1">
                        <body className="Name">N: Your Name</body>
                    </div>
                    <div className="fb-2">
                        <body className="Email">E: Email</body>
                    </div>
                    <div className="fb-3">
                        <body className="Password">P: Password</body>
                    </div>
                    <div className="fb-4">
                        <body className="School">Select your school</body>
                    </div>

                    <button className="Sign-up-button">Sign Up</button>
                </div>
            </header>
        </div>
    );
}

export default SignUp;
