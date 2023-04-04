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
    }
    return state;
}

export default reducer;