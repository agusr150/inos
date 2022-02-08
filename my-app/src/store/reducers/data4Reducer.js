import { SET_DATA4 } from "../actions/types";

const initialState = {
    data4 : [],
}

const Reducer4 = (state = initialState, action) => {
    console.log('masuk reducer3')
    switch(action.type){
        case SET_DATA4:
            return { ...state, data4: action.payload}
        default : 
            return state
    }
}

export default Reducer4
