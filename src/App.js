//import logo from './logo.svg';
import './App.css';
import { Navbar } from './links/link';
import {Route} from "react-router-dom";
import { Home } from './components/home';
import { Cart } from './components/CartDetail';


function App() {
  return (
    <div>
      <Navbar/><br/>
      <Route path="/home"><Home/></Route>
      <Route path="/cart"><Cart/></Route>
    </div>
  );
}

export default App;
