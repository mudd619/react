import {Link} from "react-router-dom"

function Navbar(){
    return (<>
        <Link style={{padding:"5%"}} to="/">Home</Link>
        <Link style={{padding:"5%"}} to="/users">Users</Link>
        <Link style={{padding:"5%"}} to="/login">Login</Link> 
    </>)
}

export {Navbar}