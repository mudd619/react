import {useContext} from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../pages/context/authContext"

function PrivateRoute({children,path,exact}){
    const {auth} = useContext(AuthContext);

    if(!auth){
        return <Redirect to="/login"/>
    }
    return (<Route path={path} exact={exact}>{children}</Route>)
}

export {PrivateRoute}