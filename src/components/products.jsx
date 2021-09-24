import { useState,useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios"

function Products(){
    
    const [data,setData] = useState("");
    const [loading,setLoading] = useState(true);

    function GetIt(){
        axios.get("http://localhost:3001/products")
        .then((res)=>{
            return res.data;
        })
        .then((res)=>{
            setData(res);
            setLoading(false);
            
        })
    }

    useEffect(()=>{
        GetIt();
    },[])

    return (<>
       {loading ? <div>...loading</div> : 
        <ul>
            {data.map((el)=>{
                return <li key={el.id}>
                    <Link to={`/products/${el.id}`}><h1>{el.name}</h1></Link>
                </li>
            })}
        </ul>
       }
    </>)
}

export {Products}