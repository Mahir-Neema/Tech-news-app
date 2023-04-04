import { useContext, useEffect, useReducer } from "react";
import React from "react";
import reducer from "./Reducer";
let APIURL = "https://hn.algolia.com/api/v1/search?";

const AppContext = React.createContext();

const initialstate = {
    isLoading:true,
    query:"React",
    nofPages:0,
    page:0,
    hits:[]
}

const AppProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,initialstate);

    useEffect(()=>{
        fetchAPIData(`${APIURL}query=${state.query}&page=${state.page}`); 
    },[]) 

    const fetchAPIData = async (apiurl) => {
        try{
            const response  = await fetch(apiurl);
            const data = await response.json();
            console.log(data);
            dispatch({
                type:"GET_ARTICLES",
                payload:{
                    hits:data.hits,
                    nofPages:data.nbPages
                }
            });
        } catch(e){
            console.log("Error Occured -> "+e)
        }
    }

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