import '../styles/Settings.css';
import Stock from "../Stock-guy.png";
function Settings() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={Stock} className="Profile-Pic"></img>
                <div className="Upload-doc">
                    <body className="Up-label">Upload a Profile Picture</body>
                    <body className="Me">Update about me</body>
                    <a href="/" className="Submit">Sign Out</a>
                </div>
            </header>
        </div>
    );
}

export default Settings;
