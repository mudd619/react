import logo from './logo.svg';
import './App.css';
import {Route,Switch} from "react-router-dom";
import {Navbar} from './pages/routes';
import { Products } from './pages/products';
import { Details } from './pages/allProducts';
import { Login } from './pages/login';
import { PrivateRoute } from './Private/private';


function App() {
 
  const env = process.env;
  //console.log(env)
  return (
    <div className="App">
      <Navbar/><br/><br/>
      <Switch>
        <Route exact path="/"><h1>Home</h1></Route>
        <PrivateRoute exact path="/dashboard"><Products/></PrivateRoute>
        <PrivateRoute path="/dashboard/:id"><Details/></PrivateRoute>
        <PrivateRoute path="/settings"><h1>Settings</h1></PrivateRoute>
        <Route path="/login"><Login/></Route> 
        <Route>404 ,Page Not Found</Route>
      </Switch>
    </div>
  );
}

export default App;
