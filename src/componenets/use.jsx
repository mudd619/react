import {useEffect, useState} from "react"

export default function Check({init,final}){
    const [count,setCount] = useState(init);
    useEffect(()=>{
        const id =setInterval(()=>{
          console.log("still running")
          setCount((prev)=>{
            if(prev === final){
              clearInterval(id);
              return "Task Completed"
            }
            return prev+1;
          });
        },1000);  
        return (()=>{
            console.log("cleaning up the set interval")
            clearInterval(id)
        })
      }, []);
    
    return (
        <div>
        <div style={{fontSize :"2vw",marginTop:"5%"}}>Counter {count}</div>
        </div>
    )
}