import './App.css';
import './css/header.css';
import './css/section.css';
import './css/footer.css';
import './css/modal.css'

// Components
import Slogan from './components/slogan.js'
import Carousel from './components/carousel.js';
import Introduction from './components/introduction.js';
import Contact from './components/contact.js';
import Footer from './components/footer.js';
import Header from './components/header.js';
import Modal from './components/modal.js';

function App() {
  return (
    <div className="App">
      <Modal/>
      {/* <Header/>
      <section>
        <Slogan/>
        <Carousel/>
        <Introduction/>
        <div className="blank" style={{width: "100%", height: "20vh"}}></div>
        <Contact/>
      </section>
      <Footer/> */}
    </div>
  );
}

export default App;
