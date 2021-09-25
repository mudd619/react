import {createContext,useState} from "react";

export const AuthContext = createContext({auth:"",handleAuth:()=>{}});

function Auth({children}){
    const [auth,setAuth] = useState("");

    const handleAuth = (token)=>{
        setAuth(token)
    }

    return (<AuthContext.Provider value={{auth,handleAuth}}>{children}</AuthContext.Provider>)
}

export default Auth