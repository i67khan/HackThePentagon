import logo from './studyBuddyLogo.png';
import './App.css';
import config from './config'

function App() {
  return (
    <div className="App">      
      <header className="App-header">
        <div className='Images'>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="Line-1"/>
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
        <div classNmae='Buttons'>
          <div className="button-container">
            <button className="Sign-up">Sign Up </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
