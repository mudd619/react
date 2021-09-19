//import logo from './logo.svg';
import './App.css';
import {Toolbar} from './components/navBar';

import styled from "styled-components"

const Div = styled.div`
  margin-left: 5%;
  margin-right: 87%;
  padding:0.5%;
  padding-top: 0%;
  background-color: grey;
  border-radius: 5px;
`

function App() {
  const DrawerItem = ({label})=>{
    return <div style={{color:'white'}}>{label}</div>
  }

  const SiteName = ({children})=>{
    return <Div>{children}</Div>
  }

  return (
    <div>
      <Toolbar>
        <SiteName>
          <DrawerItem label="Site name"/>
        </SiteName>
        <DrawerItem label="About us"/>
        <DrawerItem label="Prices"/>
        <DrawerItem label="Other"/>
      </Toolbar>
    </div>
  );
}

export default App;
