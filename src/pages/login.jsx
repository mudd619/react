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

    const handlebtn = ()=>{
        if(val === ""){
            alert("Enter details");
            return;
        }
        axios.post("https://reqres.in/api/login",val)
        .then((res)=>{
            handleAuth(res.data.token)
        })
        .catch(()=>{
            alert("Enter Valid Email Id")
        })
        setVal({email:"",password:""});
    }

    if(auth){
        return <Redirect to="/dashboard"></Redirect>
    }
    

    return (<div>
        <input style={{width:"20%",padding:"0.5%",marginBottom:"2%"}} value={val.email} onChange={handleInp} name="email" type="text" placeholder="Enter Email"/><br/>
        <input style={{width:"20%",padding:"0.5%",marginBottom:"2%"}} value={val.password} onChange={handleInp} name="password" type="password" placeholder="Enter Password"/><br/>
        <button style={{width:"8%",padding:"0.3%"}} onClick={handlebtn}>Login</button>
    </div>)
}

export {Login}