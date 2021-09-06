import {Left} from "./components/JoinUs"
import {Right} from "./components/Settings"

function App() {
  return <div style = {{display : "grid" , gridTemplateColumns : "17% 17%" , gridGap :"3%" , marginLeft:"40%",marginTop:"10%"}}>
    <Left color = "blue"/>
    <Right color ={{one :"gray",two:"red"}}/>
  </div>;
}

export default App;
