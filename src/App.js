import logo from './logo.svg';
import './App.css';
import {Route,Switch} from "react-router-dom";
import {Navbar} from './components/navbar';
import { Products } from './components/products';
import { Details } from './components/allProducts';
import { Login } from './components/login';


function App() {
  const env = process.env;
  console.log(env)
  return (
    <div className="App">
      <Navbar/><br/><br/>
      <Switch>
        <Route exact path="/"><h1>Home</h1></Route>
        <Route exact path="/users"><Products/></Route>
        <Route path="/users/:id"><Details/></Route>
        <Route path="/login"><Login/></Route>
        <Route>404 ,Page Not Found</Route>
      </Switch>
    </div>
  );
}

export default App;
