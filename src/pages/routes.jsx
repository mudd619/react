import {Link} from "react-router-dom";
import {useContext} from "react"
import { AuthContext } from "./context/authContext";

function Navbar(){
    const {auth} = useContext(AuthContext)
    return (<div style={{margin:"3% 4% 3% 4%",backgroundColor:"grey",padding:"1%",borderRadius:"10px"}}>
        <Link style={{padding:"5%",color:"white"}} to="/">Home</Link>
        {auth ? <></> : <Link style={{padding:"5%",color:"white"}} to="/login">Login</Link> }
        <Link style={{padding:"5%",color:"white"}} to="/dashboard">Dashboard</Link>
        <Link style={{padding:"5%",color:"white"}} to="/settings">Settings</Link>
    </div>)
}

export {Navbar}