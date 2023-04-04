const reducer = (state,action) => {
    switch(action.type){
        case "GET_ARTICLES":
            return{
                ...state,
                hits: action.payload.hits,
                nofPages: action.payload.nbPages
            }
    }
    return state;
}

export default reducer;