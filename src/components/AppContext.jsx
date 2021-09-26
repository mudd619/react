import {createContext,useState} from "react";

const AppContext = createContext({});

function AppProvider({children}){
    const [inp , setInp] = useState("");
    const [add,setAdd] = useState([]);

    return <AppContext.Provider value={{inp,setInp,setAdd,add}}>{children}</AppContext.Provider>
}

export {AppProvider,AppContext};