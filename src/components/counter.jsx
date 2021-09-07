import {useState} from "react";

export default function Count({init}){
    const [count,setCount] = useState(init);

    const handleCount = (valu)=>{
        setCount(count+valu);
    }
    const handleDecrease = ()=>{
      setCount(count-1)
    }

    const double = ()=>{
      setCount(count*2);
    }

    return <div>
      <h1 style={{marginTop:"10%"}}>Count : {count}</h1>
      <button style={{width:"6%",height:"2vw"}} onClick = {()=>{handleCount(1)}}>Increase</button>
      <button style={{width:"6%",height:"2vw"}} onClick = {handleDecrease}>Decrease</button>
      <button style={{width:"6%",height:"2vw"}} onClick = {double}>Double</button>
    </div>
}