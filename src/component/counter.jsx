import {useEffect,useState} from "react"
import {v4 as uuid} from "uuid"
import "./counter.css"


export default function Counter(){

    const [text,setText] = useState("")
    const [add,setAdd] = useState([]);
    const [page,setPage] = useState(1);

    const handleInp = (e)=>{
        setText(e.target.value)
    }

    function GetIt(){
        fetch(`http://localhost:3002/todos?_page=${page}&_limit=3`)
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            setAdd(res)
        })
    }

    useEffect(()=>{
           GetIt() ;
    },[page])

    const handleClick = ()=>{
    
        const data = {list: text,status : false,id: uuid()}
        fetch("http://localhost:3002/todos",{
        method: "POST",
        body: JSON.stringify(data),
        headers : {
            "content-type" : "application/json"
        }
        })
        .then(()=>{
            GetIt();
            setText("")
        })
    }
    
    const handleDelete = (temp)=>{
        fetch("http://localhost:3002/todos/"+temp,{
        method: "DELETE",
        headers : {
            "content-type" : "application/json"
        }
        })
        .then(()=>{
            GetIt()
        })
        
    }

    const handleToggle = (temp,el)=>{
        el.status = !el.status
        fetch("http://localhost:3002/todos/"+temp,{
        method: "PUT",
        body : JSON.stringify(el),
        headers : {
            "content-type" : "application/json"
        }
        })
        .then(()=>{
            GetIt()
        })
    }
    
    

    //console.log(add)
    return (<div>
        <input name="list" onChange={handleInp} value={text} type="text" placeholder="Enter the list"/>
        <button onClick={handleClick}>+</button>
        {add.map((el)=>{
            return <div className="grid" key={el.id}><button onClick={()=>{handleToggle(el.id,el)}}>Done</button>{el.status ? <span style={{textDecoration:"line-through"}}>{el.list}</span> : <span>{el.list}</span>} <span><button onClick={()=>{handleDelete(el.id)}}>delete</button></span></div>
        })}
        <button onClick={()=>{setPage(page-1)}}>Prev Page</button>
        <button onClick={()=>{setPage(page+1)}}>Next Page</button>
    </div>)
}