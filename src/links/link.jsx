import {Link} from "react-router-dom";
import {useContext} from "react"
import { AppContext } from "../components/AppContext";

function Navbar(){
    const {add} = useContext(AppContext)
    return (<div style={{backgroundColor:"#808070",padding:"0.7%",margin:"2% 1% 0% 1%",borderRadius:"10px"}}>
       <Link style={{margin:"10%",color:"#e2d3d3"}} to="/home">Home</Link>
       <Link style={{marginLeft:"60%",color:"#e2d3d3"}} to="/cart">Cart ({add.length})</Link>
    </div>)
}

export {Navbar}