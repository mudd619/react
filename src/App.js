import logo from './logo.svg';
import './App.css';
import {Route,Switch} from "react-router-dom";
import {Navbar} from './components/navbar';
import { Products } from './components/products';
import { Details } from './components/allProducts';


function App() {
  return (
    <div className="App">
      <Navbar/><br/><br/>
      <Switch>
        <Route exact path="/"><h1>Home</h1></Route>
        <Route exact path="/products"><Products/></Route>
        <Route path="/products/:id"><Details/></Route>
        <Route>404 ,Page Not Found</Route>
      </Switch>
    </div>
  );
}

export default App;
