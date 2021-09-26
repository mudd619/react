import { useState,useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios"

function Products(){
    
    const [data,setData] = useState("");
    const [loading,setLoading] = useState(true);

    function GetIt(){
        axios.get("https://reqres.in/api/users")
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
       <>
        <h1 style={{marginBottom:"3%"}}>Welcome to dashboard</h1>
        <ul style={{margin:"0% 40% 0% 40%"}}>
            {data.data.map((el)=>{
                return <li key={el.id}>
                    <Link to={`/dashboard/${el.id}`}><h2>{el.first_name}</h2></Link>
                </li>
            })}
        </ul>
      </>
       }
    </>)
}

export {Products}