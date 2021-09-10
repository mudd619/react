import "./todo.css";
import {useState} from "react";

function Loop({add , setAdd}){

    const [comp , setComp] = useState([]);

    const handleId = (temp)=>{
        setAdd(add.filter((el)=>{
            if(el.id === temp){
                setComp([...comp,el])
                el.status = !el.status;
                return el.id!==temp;
            }
            return el.id!==temp;
        }));    
    }

    const handleId2 = (temp)=>{
        setComp(comp.filter((el)=>{
            if(el.id === temp){
                setAdd([...add,el])
                el.status = !el.status;
                return el.id!==temp;
            }
            return el.id!==temp;
        }));    
    }

    const handleComp = ()=>{
        const heyy = document.getElementById("heyy");
        if(heyy.style.display === "none"){
            heyy.style.display = "block"
        }
        else {
            heyy.style.display = "none"
        }
        
    }
    return (<div>
        {add.map((el)=>{
           return (<div className="res" key ={el.id}>
            <button onClick={()=>{handleId(el.id)}} className="btn">{el.status ? <>&#x2713;</> : ""}</button>
                <span style={{marginLeft:"2%",fontSize:"1.1vw"}}>{el.status ? <span className="dec">{el.inp}</span> : <span>{el.inp}</span>}</span></div>)
        })}
        <button onClick={handleComp} className="butn3" >Show completed</button>
        <div id="heyy" style={{display:"none"}}>
          {comp.map((el)=>{
             return (<div className="res" key ={el.id}>
              <button onClick={()=>{handleId2(el.id)}} className="btn">{el.status ? <>&#x2713;</> : ""}</button>
                <span style={{marginLeft:"2%",fontSize:"1.1vw"}}>{el.status ? <span className="dec">{el.inp}</span> : <span>{el.inp}</span>}</span></div>)
          })}
        </div>
    </div>)
}

export {Loop};