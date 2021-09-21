import { AuthContext } from "../context/AuthContext";
import {useContext,useState} from "react";
import axios from "axios"

export function Login(){
    const [inp,setInp] = useState("")

    const [loading,setLoading] = useState("")
    const {isAuth,toggleAuth} = useContext(AuthContext);


    const handleInp = (e)=>{
        setInp(e.target.value)
    }

    function Find(){
        
        setLoading(false)
        axios.get("https://reqres.in/api/login")
        .then((res)=>{
            return res;
        })
        .then((res)=>{
            res.data.data.map((el)=>{
                if(el.name === inp){
                    console.log(el.name,inp)
                    toggleAuth();
                }
                return el;
            })
        })
        .finally(()=>{
            setLoading(true)
        })
    }

    
    return(<div>
        {loading ? isAuth ? <div>
            <h1>Welcome Mr. Ex</h1>
            <h2>You have cracked the code</h2>
        </div> : <><h1>Invalid Detalis</h1></> 
        : <div>Navbar<input onChange={handleInp} type="text" placeholder="Enter Login Name"/><button onClick={Find}>Login</button></div>}
    </div>)
}