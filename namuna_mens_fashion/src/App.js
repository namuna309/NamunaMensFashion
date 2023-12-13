// CSS
import './App.css';
import './css/section.css';
import './css/footer.css';

// Components
import Footer from './components/footer.js';
import Header from './components/header.js';
import Modal from './components/modal.js';

// React Router Dom
import { Routes, Route, Link } from 'react-router-dom';

// Routes
import Main from './routes/main.js';
import Collections from './routes/collection.js';



function App() {
  return (
    <div className="App">
      <Modal/>
      <Header/>
      <section>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/collections' element={ <Collections/>} />
          <Route path="*" element={<div>404 Error</div>} />
        </Routes>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
