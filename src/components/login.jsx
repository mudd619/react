import axios from "axios";
import {useState} from "react";
import { AuthContext } from "./context/authContext";
import {useContext} from "react";
import {Redirect} from "react-router-dom";

function Login(){

    const [val,setVal] = useState("");
    const {handleAuth,auth} = useContext(AuthContext);

    const handleInp = (e)=>{
        const {name,value} = e.target;
        setVal({...val,[name]:value});
    }

    const handlebtn = (e)=>{
        axios.post("https://reqres.in/api/login",val)
        .then((res)=>{
            handleAuth(res.data.token)
        })
        .catch(console.error)
    }

    if(auth){
        return <Redirect to="/users"></Redirect>
    }

    return (<div>
        <input onChange={handleInp} name="email" type="text" placeholder="Enter Email"/><br/>
        <input onChange={handleInp} name="password" type="password" placeholder="Enter Password"/><br/>
        <button onClick={handlebtn}>Submit</button>
    </div>)
}

export {Login}