import { useContext, useReducer } from "react";
import React from "react";

const AppContext = React.createContext();

const initialstate = {
    isLoading:true,
    query:"React",
    nofPages:0,
    page:0,
    hits:[]
}

const AppProvider = ({children}) => {

    // const [state,dispatch] = useReducer(reducer,initialstate);

    return (
        <AppContext.Provider value=" context">
            {children}
        </AppContext.Provider>
    )
}

// custom hook
const useGlobalContext = () => {
    return useContext(AppContext); 
}

export {AppContext,AppProvider,useGlobalContext};