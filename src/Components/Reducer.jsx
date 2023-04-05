const reducer = (state,action) => {
    switch(action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading: true
            }
        case "GET_ARTICLES":
            return{
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nofPages: action.payload.nbPages
            }
        case "DELETE_POST":
            return{
                ...state,
                hits: state.hits.filter((currElem)=>currElem.objectID !== action.payload)
            }
    }
    return state;
}

export default reducer;