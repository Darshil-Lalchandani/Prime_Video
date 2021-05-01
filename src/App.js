import './App.css';
import Navbar from './components/Navbar'
import Featured from './components/Featured'
import Kids from './components/Kids'
import Bollywood from './components/Bollywood'
import Latest from './components/Latest'

function App() {
  return (
    <>
      <Navbar />
      <Featured />
      <Kids />
      <Bollywood />
      <Latest />
    </>
  );
}

export default App;
