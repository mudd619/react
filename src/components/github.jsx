import axios from "axios";
import {useState,useEffect} from "react"

function Gitsend(){

    const [text,setText] = useState("");
    const [loop,setLoop] = useState("");
    const [data,setData] = useState([])
    const [show,setShow] = useState(false)
    const [loading,setLoading] = useState(false)
    const [temp,setTemp] = useState(false)

    const handleChange = (e)=>{
        setText(e.target.value)
        setLoop(e.target.value)
    }

    const handleSubmit = ()=>{
        setLoading(false)
        setShow(true)
        setTemp(!temp)
        setText("")
    }

    useEffect(()=>{
        if(show){
            axios.get(`https://api.github.com/users/${loop}`)
            .then((res)=>{
            return res; 
            })
            .then((res)=>{
                setData([res.data]);
                //console.log(res.data,data);
            })
            .finally(()=>{
                setLoading(true)
            })
        }
    },[temp])

    return(<div>
        <input style={{marginLeft:"40%",marginTop:"5%"}}  onChange={handleChange} value={text} type="text" placeholder="Enter User"/>
       <button onClick={handleSubmit}>click</button>
       {loading? <div style={{display:"grid",gridTemplateColumns:"20% 30%",margin:"5% 20% 2% 38%"}}>
           <img style={{width:"80%",borderRadius:"5%",border:"4% solid black"}} src={data[0].avatar_url}/>
           <div>
           <div>Username : {data[0].login}</div>
           <a href={data[0].html_url}>Github Page</a>
           </div>
       </div> : <div></div>}
    </div>)
}

export {Gitsend}