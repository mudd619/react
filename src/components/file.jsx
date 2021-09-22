
import {ThemeContext} from "../contexts/ThemeContext";
import {useContext} from "react";
import styled from "styled-components";

const Div = styled.div`
   border:1px solid black;
   padding: 1%;
   margin :5% 3% 0% 3%;
   border-radius: 10px;
`

export function Navbar(){
    const {dark,light,toggleTheme,theme} = useContext(ThemeContext);

    console.log(dark,light)

    return (<div>{theme ? <Div style={{backgroundColor:dark.color}}><span style={{color:dark.font,marginRight:"40%"}}>Im Changing</span><button onClick={toggleTheme}>Change Theme</button></Div> 
         : <Div style={{backgroundColor:light.color}}><span style={{color:light.font,marginRight:"40%"}}>Im Changing</span><button onClick={toggleTheme}>Change Theme</button></Div>}
    </div>
    )
}