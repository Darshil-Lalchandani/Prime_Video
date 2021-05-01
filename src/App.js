import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Featured from './components/Featured'
import Kids from './components/Kids'
import Bollywood from './components/Bollywood'
import Latest from './components/Latest'
import Login from './components/Login'

function App() {
  return (
    <>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <Navbar />
          <Featured />
          <Kids />
          <Bollywood />
          <Latest />
        </Route>
      </Switch>
    </>
  );
}

export default App;
