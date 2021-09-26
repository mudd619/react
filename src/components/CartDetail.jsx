import {useContext} from "react";
import App from "../App";
import { AppContext } from "./AppContext";

function Cart(){
    const {add,setAdd} = useContext(AppContext);

    const handleCount = (temp)=>{
        setAdd(add.map((el)=>{
            if((el.id===temp) && (el.quantity<9)){
                el.quantity = el.quantity+1;
                el.total = el.price * el.quantity
            }
            return el;
        }))
    }

    const handleCount2 = (temp)=>{
        setAdd(add.map((el)=>{
            if((el.id===temp) && (el.quantity>1)){
                el.quantity = el.quantity-1;
                el.total = el.total - el.price
            }
            return el;
        }))
    }

    const handleDel = (temp)=>{
        setAdd(add.filter((el)=>{
            return el.id!=temp;
        }))
    }

    return (<><h1 style={{textAlign:"center",marginBottom:"3%"}}>Cart page</h1><div style={{display:"grid",gridTemplateColumns:"80% 20%"}}>
                <div style={{display:"grid",gridTemplateColumns:"30% 30% 30%"}}>{add.map((el)=>{
                return <div style={{display:"grid",gridTemplateColumns:"30% 40% 40%",border:"1px solid black",marginLeft:"20%",padding:"5%",borderRadius:"10px"}} key={el.id}>
                    <img style={{width:"70%",marginTop:"20%"}} src={el.image_url} alt="no"/>
                    <div>
                        <div style={{fontWeight:"bold",color:"maroon"}}>{el.product_name}</div>
                        <div style={{marginTop:"5%"}}><span style={{fontWeight:"bold"}}>Price : </span> {el.total}</div>
                    </div>
                    <div style={{marginLeft:"15%",marginTop:"10%"}}>
                        <span style={{marginLeft:"5%"}}><button onClick={()=>{handleCount(el.id)}}>+</button><button style={{backgroundColor:"white",border:"none"}}>{el.quantity}</button><button onClick={()=>{handleCount2(el.id)}}>-</button></span>
                        <button onClick={()=>{handleDel(el.id)}} style={{margin:"30% 0% 0% 10%"}}>Delete</button>
                    </div>
                </div>
                })}</div>
                {add.length===0 ? <h1>Cart is Empty</h1> : <div> 
                    <h1>Cart Total</h1>
                    <div style={{marginTop:"5%"}}>{
                        add.length===1 ? <div><span style={{fontWeight:"bold"}}>Price : </span>{add[0].total}</div> : <div><span style={{fontWeight:"bold"}}>Price : </span>{add.reduce((a,b)=>{return (a.total+b.total)})}</div>     
                    }</div>
                </div>}
            </div></>)
}

export {Cart}