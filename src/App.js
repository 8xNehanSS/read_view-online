import './App.css';
import Navbar from './components/Navbar';
import Options from './components/Options';
import Section from './components/Section';
import fiction from './data/fiction.json';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Options />
      <Section data={fiction}/>
      <Section data={fiction}/>
      <Section data={fiction}/>
      <Section data={fiction}/>
    </div>
  );
}

export default App;
