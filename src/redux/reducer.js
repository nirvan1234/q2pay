import { GET_PRODUCT } from "./action";

const intialState={
    product:[]
}

function userReducer(state = intialState, action){
    switch(action.type){
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload

        };

        default:
        return state;

    }
    

}

export default userReducer;