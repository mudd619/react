import {useState,useEffect} from "react"
import styled from "styled-components"
import { CreditCard } from "./creditCard"

const Input = styled.input`
   font-size: 0.85vw;
   width :34%;
   border:none;
   margin-bottom: 2%;
   border-bottom: 1px solid red;
   :focus{
    outline: none;
   }
`

const Input1 = styled.input`
   font-size: 0.85vw;
   width :70%;
   border:none;
   margin-bottom: 2%;
   border-bottom: 1px solid red;
   :focus{
    outline: none;
   }
`
const Input3 = styled.input`
   font-size: 1vw;
   margin-left: 10%;
   width: 15%;
   height: 2.5vw;
   padding: 0.5%;
   margin-bottom: 10%;
   background-color:#d86464;
   border-radius: 10px;
`

const Div = styled.div`
   display: grid;
   grid-template-columns: 14% 13% 9.9%;
   margin-bottom: 3%;
`


//function send
function Card(){

    const [valu,setValu] = useState("")
    const [temp,setTemp]= useState(true);
    const [show,setShow]= useState(false);
    const [card,setCard] = useState(false);

    const Inp = ({type, placeholder})=>{
        return <Input type={type} placeholder={placeholder}/>
    }

    const Inp1 = ({type, placeholder})=>{
        return <Input1 type={type} placeholder={placeholder}/>
    }

    const Inp3 = ({type, placeholder})=>{
        return <Input3 type={type} placeholder={placeholder}/>
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setCard(false)
        setShow(true)
        setTemp(!temp)
        const data = {
            name: e.target[0].value,
            cNo : e.target[1].value,
            EMon : e.target[2].value,
            Eyear : e.target[3].value,
            cvv : e.target[4].value
        }
        setValu(data);
    }

    useEffect(()=>{
        if(show){
            if(valu.name === ""||valu.cNo === ""||valu.EMon === ""||valu.Eyear===""||valu.cvv===""){
                alert("Enter Valid Input")
                return
            }
            setValu(valu)
            setCard(true)
        }
    },[temp])

    return (<>
        <Form onSubmit={handleSubmit}>
            <div style={{margin:"2% 0% 2% 0%",fontSize: "1.3vw"}}>Payment details</div>
            <Inp type="text" placeholder="Cardholder name "/><br/>
            <Inp type= "text" placeholder="Card Number - 4444 5555 6666 7777"/>
            <Div>
                <Inp1 type="number" placeholder="Expiry Month"/>
                <Inp1 type="number" placeholder="Expiry Year"/>
                <Inp1 type="number" placeholder="CVV"/>
            </Div>
            <Inp3 type="submit"/>
        </Form>
        {card ? <CreditCard data={valu}/> : <div></div>}
    </>)
}



function Form({children,onSubmit}){
    return <form style={{marginLeft:"40%"}} onSubmit={onSubmit}>{children}</form>
}

export {Card}