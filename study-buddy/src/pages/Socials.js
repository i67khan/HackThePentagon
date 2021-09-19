import '../styles/Socials.css';
import { Image } from 'react-native'
import { useImperativeHandle } from 'react';
import pfpic from "../usermans.jpg";
function Socials() {
    return (
        <div className="App">
            <header className="App-header">``

            <img 
                src =  {pfpic}
                className = "profpic"
                alt = "pfp"
            />
            <div className="desc">
                <h2>Hi! I'm Christine Hoffman, I'm studying FARM at UW</h2>
                <h2>@christine_2299384</h2>
            </div>

            </header>
        </div>
    );
}

export default Socials;
