import collection from '../imgs/collections.jpeg'
import '../styles/about.css'

export default function ABout(){
    return(
        <div className="about-main">
            <div className="about-left">
                <h1>About us</h1>
                <div className="about-text">
                    <h2>Midnight Sun</h2>
                       <p>Solar-powered electric vehicle design team at the University Of Waterloo</p>
                </div>
            </div>
            <img src={collection} alt="collection"></img>
        </div>

    );
}