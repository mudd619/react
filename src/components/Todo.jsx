import "./todo.css";


function ShowFun({handleAdd,handleChange,list}){
    return (<div className="one">
        <button className="btn2" onClick={handleAdd}>+</button>
        <input className="inp" style={{marginBottom:"2%"}} name="inp" onChange={handleChange} value={list.inp} type="text" placeholder="Enter the task"/>  
    </div>)
}

export {ShowFun};