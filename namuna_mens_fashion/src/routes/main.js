// CSS
import './../css/main.css'

// Components
import Slogan from '../components/main/slogan.js'
import Carousel from '../components/main/carousel.js';
import Introduction from '../components/main/introduction.js';
import Contact from '../components/main/contact.js';

function Main() {
    return(
        <>
        <Slogan/>
        <Carousel/>
        <Introduction/>
        <div className="blank" style={{width: "100%", height: "20vh"}}></div>
        <Contact/>
        </>
    )
}

export default Main;