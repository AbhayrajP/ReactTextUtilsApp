
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="king" aboutText="queen"></Navbar>
    <div className="container my-3">
      
      <TextForm heading="Enter your input below"/>
      <About/>
    </div>
    </>

  );
}

export default App;
