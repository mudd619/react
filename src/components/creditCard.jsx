import styled from "styled-components"

const Diiv = styled.div`
   background-color: #e46a6a;
   margin:0% 36% 0% 36%;
   padding-top: 1%;
   border-radius: 15px;
`

const Div1 = styled.div`
   margin:0% 0% 7% 70%;
   font-size: 2.5vw;
   font-style: italic;
   font-weight: bold;
   color:white;
`

const Div2 = styled.div`
   margin:0% 0% 7% 11%;
   font-size: 1.3vw;
   color :white;
   letter-spacing: 2px;
`
const Div3 = styled.div`
   color:white;
   font-size: 1.2vw;
   margin-bottom: 25%;
`

function CreditCard({data}){
    console.log(data)
    return <Diiv>
        <Div1>VISA</Div1>
        <Div2>{data.cNo}</Div2>
        <div style={{display:"grid",gridTemplateColumns:"40% 27% 30%",margin:"0% 0% 0% 11%"}}>
           <Div3><div style={{marginBottom:"5%",fontSize:"0.7vw"}}>Card Holder</div>{data.name}</Div3>
           <Div3><div style={{marginBottom:"5%",fontSize:"0.7vw"}}>Expires</div>{data.EMon}/{data.Eyear}</Div3>
           <Div3><div style={{marginBottom:"5%",fontSize:"0.7vw"}}>CVV</div>{data.cvv}</Div3>
        </div>
    </Diiv>
}

export {CreditCard}