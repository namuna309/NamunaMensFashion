import './App.css';
import './css/header.css';
import './css/section.css';

// Components
import Slogan from './components/slogan.js'
import Carousel from './components/carousel.js';
import Introduction from './components/introduction.js';

function App() {
  return (
    <div className="App">
      <header>
        <div className="header_inner background-font-color">
            <div className="logo">
                <div className="logo-img"></div>
            </div>
        </div>
      </header>
      <section>
        <Slogan/>
        <Carousel/>
        <Introduction/>
      </section>
    </div>
  );
}

export default App;
