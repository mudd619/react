//import logo from './logo.svg';
import './App.css';

import {useState} from "react";
import {v4 as uuid} from "uuid";
//import Sort from "./components/buttonSort"
import { Display } from './components/RestaurantDetails';

const data = require("./components/data.json");



function App() {
  
  const obj = {
    name:"",
   payment: "",
   votes:"",
   reviews:"",
   rating:"",
   costOne:"",
   categories : "",
   image:"",
   id : uuid()
  }

  const [list , setList] = useState(obj);
  const [add,setAdd] = useState([...data]);
  const [flag,setFlag] = useState(add);

    const handleList = (el)=>{
         const {name , value} = el.target;
         setList({...list ,[name] : value})
    }

    const handleClick= (e)=>{
        e.preventDefault()

        if(list.payment === ""){
            alert("Payment mode cannot be left blank");
            return
        }
        else if(list.name === ""){
            alert("Restaurant name cannot be left blank");
            return
        }
        else if(list.categories === ""){
            alert("Categories cannot be left blank");
            return
        }
        else if(list.image === ""){
            alert("Image url cannot be left blank");
            return
        }
        if(list.payment !== ""){
          const temp= {[list.payment] : "true"}
          list.payment = temp;
        }
        
        setAdd([...add,list]);
        setFlag([...add,list])
        setList(obj);
    }
    

    const handleSort = (temp)=>{
      if(temp === 1){
        setFlag(add.filter((el)=>{ 
          return (el.rating >= 1);
        }))
      }
      else if(temp === 2){
        setFlag(add.filter((el)=>{   
          return (el.rating >= 2);
        }))
      }
      else if(temp === 3){
        setFlag(add.filter((el)=>{
          return (el.rating >= 3);
        }))
      }
      else if(temp === 4){
        setFlag(add.filter((el)=>{
          return (el.rating >= 4);
        }))
      }
      else if(temp === "none"){
        setFlag(add.map((el)=>{
          return (el);
        }))
      }
  }

  const payment = (temp)=>{
    if(temp === "Cash"){
      setFlag(add.filter((el)=>{
        return (el.payment.Cash === "true")
      }))
    }
    else if(temp === "Card"){
      setFlag(add.filter((el)=>{
        return (el.payment.Card === "true")
      }))
    }
  }
  
  const sortIt = (temp)=>{
    if(temp === "hl"){
      setAdd(add.filter((el)=>{
        return (el)
      }))
      setFlag(flag.sort((el,el2)=>{
        return (el2.costOne - el.costOne)
      }).filter((el)=>{
        return (el)
      }))
    }
    else if(temp === "lh"){
      setAdd(add.filter((el)=>{
        return (el)
      }))
      setFlag(flag.sort((el,el2)=>{
        return (el.costOne - el2.costOne)
      }).filter((el)=>{
        return (el)
      }))
    }
    else {
      setFlag(add.filter((el)=>{
        return (el)
      }))
    }
  }

  return (
    <div className="App">
      <div style={{border:"1px solid rgb(175, 173, 173)",padding:"1% 3% 3% 3%",margin:"0% 3% 0% 2%",borderRadius:"10px"}}>
          <h1>Enter Restaurants to be added</h1>
          <form>
             <input onChange={handleList} value={list.name} type="text" name="name" placeholder = "Enter restaurant name"/>
             <input onChange={handleList} value={list.payment} list="yoo" type="text" name="payment" placeholder="Select payment mode"/>
             <datalist id="yoo">
                 <option>Cash</option>
                 <option>Card</option>
                 <option>Online</option>
             </datalist> 
             <input onChange={handleList} value={list.votes} type="number" name="votes" placeholder="Enter votes"/>
             <input onChange={handleList} value={list.reviews} type="number" name="reviews" placeholder="Enter reviews"/>
             <input onChange={handleList} value={list.rating} type="number" name="rating" placeholder="Enter rating in 5"/>
             <input onChange={handleList} value={list.costOne} type="number" name="costOne" placeholder="Enter Cost for one person"/>
             <input onChange={handleList} value={list.categories} type="text" name="categories" placeholder="Categories (eg: Arabian, Chinese)"/>
             <input onChange={handleList} value={list.image} type="text" name="image" placeholder="Enter a image url"/><br/>
             <button style={{width:"5%",marginTop:"2%"}} onClick={handleClick}>Add</button>
          </form>                                
      </div>
      <div style={{display:"grid",gridTemplateColumns: "30% 30% 30%",marginLeft:"8%"}}>
        <div>
          <div style={{marginTop:"2%",marginBottom:"1%"}}>Ratings</div>
          <button onClick={()=>handleSort(1)}>1 Star</button>
          <button onClick={()=>handleSort(2)}>2 Star</button>
          <button onClick={()=>handleSort(3)}>3 Star</button>
          <button onClick={()=>handleSort(4)}>4 Star</button>
          <button onClick={()=>handleSort("none")}>All</button>
        </div>
        <div>
          <div style={{marginTop:"2%",marginBottom:"1%"}}>Payment</div>
          <button onClick={()=>{payment("Cash")}}>Cash</button>
          <button onClick={()=>{payment("Card")}}>Card</button>
          <button onClick={()=>handleSort("none")}>All</button>
        </div>
        <div>
          <div style={{marginTop:"2%",marginBottom:"1%"}}>Sort Price</div>
          <button onClick={()=>{sortIt("hl")}}>High to low</button>
          <button onClick={()=>{sortIt("lh")}}>Low to high</button>
          <button onClick={()=>{sortIt("d")}}>Default</button>
        </div>
      </div>
      <Display list = {flag}/>
    </div>
  );
}

export default App;
