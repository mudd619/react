import {useEffect,useState} from "react"
import {v4 as uuid} from "uuid"
import "./counter.css";
import axios from "axios"


export default function Counter(){

    const [text,setText] = useState("")
    const [add,setAdd] = useState([]);
    const [page,setPage] = useState(1);

    const handleInp = (e)=>{
        setText(e.target.value)
    }

    const todoInstance = axios.create({
        baseURL : "http://localhost:3002"
    })

    async function GetIt(){
        // let pone =  axios.get("https://www.npmjs.com/package/axios");
        // let ptwo = axios.get("https://learn.masaischool.com/app/lecture/9441");

        // let [one,two] = await axios.all([pone,ptwo])

        let res = await todoInstance.get("/todos",{
            params:{
                _page : page,
                _limit:3 
            }
        })
        setAdd(res.data)
        // .then((res)=>{
        //     return res.json();
        // })
        // .then((res)=>{
        //     console.log(res);
        //     setAdd(res)
        // })
        //console.log(res)
        
        // fetch(`http://localhost:3002/todos?_page=${page}&_limit=3`)
        // .then((res)=>{
        //     return res.json()
        // })
        // .then((res)=>{
        //     setAdd(res)
        // })
    }

    useEffect(()=>{
           GetIt() ;
    },[page])

    const handleClick = async ()=>{
    
        //const data = ,id: uuid()}

        const data ={
            list: text,status : false
        }
        let dat = await todoInstance.post("/todos",data)
        GetIt()
        setText("")
        // fetch("http://localhost:3002/todos",{
        // method: "POST",
        // body: JSON.stringify(data),
        // headers : {
        //     "content-type" : "application/json"
        // }
        // })
        // .then(()=>{
        //     GetIt();
        //     setText("")
        // })
    }
    
    const handleDelete = async (temp)=>{
        let del = await todoInstance.delete("/todos/"+temp)
        GetIt()
        
    }

    const handleToggle = async (temp,el)=>{
        el.status = !el.status
        let res = await todoInstance.put("/todos/"+temp,el)
        GetIt()
        // {
        //     method: "PUT",
        //     body : JSON.stringify(el),
        //     headers : {
        //         "content-type" : "application/json"
        //     }
        // }
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