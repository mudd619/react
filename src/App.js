//import logo from './logo.svg';
import './App.css';
import {ShowFun} from "./components/Todo";
import {useState} from "react";
import {v4 as uuid} from "uuid";
import {Loop} from "./components/Todomap"

function App() {
  const [list, setList] = useState({inp:""});
    const [add,setAdd] = useState([])

    const handleChange = (e)=>{
        const {name , value} = e.target;
        setList({[name] : value , status : false , id : uuid()});
    }
    const handleAdd = ()=>{
        if(list.inp === ""){
          alert("Enter Valid Input");
          return
        }
        setAdd([...add , list]);
        setList({inp:""})
  }

  //console.log(list)
  return (
    <div className="back">
      <ShowFun handleAdd = {handleAdd} handleChange={handleChange} list={list} />
      <Loop add = {add} setAdd={setAdd}/>
    </div>
  );
}

export default App;
