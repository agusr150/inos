import { SET_DATA3 } from "../actions/types";

const initialState = {
    data3 : [],
}

const Reducer3 = (state = initialState, action) => {
    console.log('masuk reducer3')
    switch(action.type){
        case SET_DATA3:
            return { ...state, data3: action.payload}
        default : 
            return state
    }
}

export default Reducer3
