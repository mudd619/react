import { createContext,useState } from "react";


export const AuthContext = createContext("");

function Auth({children}){
    const [isAuth,setAuth] = useState(false);

    const toggleAuth = ()=>{
        console.log("s")
        setAuth(true)
    }


    return <AuthContext.Provider value={{isAuth:isAuth,toggleAuth}}>{children}</AuthContext.Provider>

}
//
export default Auth