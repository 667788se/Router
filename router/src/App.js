import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar'
import about from './Components/Aboutus';
import home from './Components/Home';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
<Route path="/" exact component={home}/>
<Route path="/Aboutus"  component={about}/>
<Route path="/Profile"  component={Profile}/>

      </BrowserRouter>
    </div>
  );
}

export default App
