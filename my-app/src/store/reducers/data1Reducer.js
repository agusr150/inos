import { SET_DATA1 } from "../actions/types";

const initialState = {
    data1 : [],
}

const Reducer1 = (state = initialState, action) => {
    console.log('masuk reducer')
    switch(action.type){
        case SET_DATA1:
            return { ...state, data1: action.payload}
        default : 
            return state
    }
}

export default Reducer1