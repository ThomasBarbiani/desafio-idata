import './App.css';

import { Navbar } from './components/Navbar';
import { Table } from './components/Table';
import { Footer } from './components/Footer';
import { Banner } from './components/Banner';
import FormDados from './components/FormDados';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  
  return (
    <div>
      <Navbar />
      <div className="App"> 
        <Router>
          <Routes> 
            <Route path="/" element={<Banner />} />
          </Routes>
          <Routes>   
            <Route path="/" element={<Table />} />
            <Route path="/cadastro" element={<FormDados />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
