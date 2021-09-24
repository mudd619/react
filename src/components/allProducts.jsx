import {useParams} from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";

function Details(){

    const {id} = useParams()

    const [prod,setProd] = useState("");
    const [loading,setLoading] = useState(true);

    function Gett(){
        axios.get(`http://localhost:3001/products/${id}`)
        .then((res)=>{
            setProd(res.data);
            setLoading(false)
        })
    }

    useEffect(()=>{
        Gett();
    },[])
    
    // return (<div key={id}>Users {id}</div>)
    return <div>
        {loading? <div>...loading</div> : 
        <div><h1>Product - {prod.name} <br/>Price - {prod.price}</h1></div>}
    </div>
}

export {Details}