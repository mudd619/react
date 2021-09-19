//import logo from './logo.svg';
import './App.css';
import {Drawer} from './components/navBar';

import styled from "styled-components"

const Div = styled.div`
      display: grid;
      grid-template-columns: 8% 20%;
      margin-bottom: 3%;
`

const Img = styled.img`
   width:25%;
   margin-left: 52%;
`

function App() {
  const DrawerItem = ({label,logo})=>{
    return <Div>
      <Img src={logo}/>
      <div style={{fontSize:"1.5vw",color:'gray'}}>{label}</div>
    </Div>
  }

  return (
    <div>
      <Drawer>
        <DrawerItem label="Inbox" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-UFdqvIf4Yj4nCvkAxgQQSfY6pom6I-6WhA&usqp=CAU"/>
        <DrawerItem label="Starred" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMefGQqbPFkku7GB6_EgjtnLQaH04Y3FkKCA&usqp=CAU"/>
        <DrawerItem label="Send email" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSfNTVo1xGYj7Zpird70n4P-vHANNXuB19-A&usqp=CAU"/>
        <DrawerItem label="Drafts" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUpIUu-1iWSq4PVCz7wbQmaBCcC5nZgA-Z9A&usqp=CAU"/>
      </Drawer>
    </div>
  );
}

export default App;
