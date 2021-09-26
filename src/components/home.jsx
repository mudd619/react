import {useContext, useEffect, useState} from "react"
import { AppContext } from "./AppContext";
import axios from "axios"

function Home(){
    const {inp,setInp,setAdd,add} = useContext(AppContext);
    const [loading,setLoading] = useState(true)
    const [flag,setFlag] = useState(true)
    
    function GetIt(){
        axios.get("http://localhost:3001/data")
        .then((res)=>{
            setInp(res.data);
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const handleAdd = (temp)=>{
        inp.map((el)=>{
            if(el.id===temp){
                let flag = true;
                add.map((el2)=>{
                    if(el2.id === temp){
                        alert("Already added to cart")
                        flag=false;
                    }
                    return el2;
                })
                if(flag){
                    alert("Added to cart")
                    setAdd([...add,el])
                }
            }
            return el;
        })
    }
    
    useEffect(()=>{
        GetIt()
    },[])

    return (<><h1 style={{textAlign:"center",marginBottom:"3%"}}>Home page</h1>{loading ? <div style={{textAlign:"center"}}>...loading</div> : <div style={{display:"grid",gridTemplateColumns:"30% 30% 30%",marginLeft:"6%"}}>{inp.map((el)=>{
        return <div style={{display:"grid",gridTemplateColumns:"30% 80%",border:"1px solid black",marginLeft:"20%",marginBottom:"5%",padding:"5%",borderRadius:"10px"}} key={el.id}>
            <img style={{width:"70%",marginTop:"50%"}} src={el.image_url} alt="no"/>
            <div style={{marginRight:"9%"}}>
                <div style={{fontWeight:"bold",color:"maroon"}}>{el.product_name}</div>
                <div style={{marginTop:"5%"}}><span style={{fontWeight:"bold"}}>Price : </span> {el.price}</div>
                <div style={{marginTop:"5%"}}><span style={{fontWeight:"bold"}}>Description : </span>{el.description}</div>
                <button style={{padding:"3%",marginTop:"10%"}} onClick={()=>{handleAdd(el.id)}}>Add to Cart</button>
            </div>
        </div>
    })}</div>}
        </>)
}

export {Home}