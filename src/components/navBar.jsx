import styled from "styled-components"

const Di = styled.div`
margin-top: 5%;
   display: grid;
   grid-template-columns: 70% 12% 10% 10%;
   border: 1px solid black;
   padding: 1%;
   margin-left: 2%;
   margin-right: 2%;
   background-color: #7c6666;
   border-radius: 5px;
`

export const Toolbar = ({children})=>{
    return <Di>{children}</Di>
}
