import './App.css';
import './css/section.css';
import './css/footer.css';
import './css/modal.css'

// Components
import Footer from './components/footer.js';
import Header from './components/header.js';
import Modal from './components/modal.js';

// Routes
import Main from './routes/main.js';
import Collection from './routes/collection.js';

function App() {
  return (
    <div className="App">
      <Modal/>
      <Header/>
      <section>
        <Main/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
