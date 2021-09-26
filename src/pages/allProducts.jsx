import {useParams,Redirect,useHistory} from "react-router-dom";
import axios from "axios";
import { useState,useEffect, useContext } from "react";
import { AuthContext } from "./context/authContext";




function Details(){
    const history = useHistory()
    const cancelTokenSource = axios.CancelToken.source();
    const {id} = useParams();
    const {auth} = useContext(AuthContext)

    const [prod,setProd] = useState("");
    const [loading,setLoading] = useState(true);

    function Gett(){
        axios.get(`https://reqres.in/api/users/${id}`,{
            cancelToken: cancelTokenSource.token
        })
        .then((res)=>{
            setProd(res.data.data);
            setLoading(false)
        })
    }

    useEffect(()=>{
        Gett();
        return (()=>{
            cancelTokenSource.cancel()
        })
    },[id])

    const handleBack =()=>{
        history.replace("/dashboard")
    }

    if(!auth){
        return <Redirect to="/login"></Redirect>
    }

    
    // return (<div key={id}>Users {id}</div>)
    return <div>
        {loading? <div>...loading</div> : 
        <div><img src={prod.avatar}/><h1>User - {prod.first_name}  {prod.last_name}</h1><br/><button style={{width:"8%",padding:"0.3%"}} onClick={handleBack}>Back</button></div>}
    </div>
}

export {Details}