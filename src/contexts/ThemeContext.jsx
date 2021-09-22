import { createContext,useState} from "react";
import { obj } from "../components/styles";


const ThemeContext = createContext("");


function Theme({children}){
    const [theme,setTheme] = useState(false);

    const toggleTheme = ()=>{
        setTheme(!theme)
    }

    const {dark , light} = obj
    return <ThemeContext.Provider value={{dark:dark,light:light,toggleTheme:toggleTheme,theme:theme}}>{children}</ThemeContext.Provider>
}

export {Theme,ThemeContext};