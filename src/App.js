import './App.css';
import { Navbar } from './components/Navbar';
import { Table } from './components/Table';
import { Footer } from './components/Footer';
import { Banner } from './components/Banner';


function App() {
  
  return (
    <div>
      <Navbar />
      <div className="App"> 
        <Banner />
        <Table />
      </div>
      <Footer />
    </div>
  );
}

export default App;
