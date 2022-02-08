import { SET_DATA2 } from "../actions/types";

const initialState = {
    data2 : [],
}

const Reducer2 = (state = initialState, action) => {
    console.log('masuk reducer2')
    switch(action.type){
        case SET_DATA2:
            return { ...state, data2: action.payload}
        default : 
            return state
    }
}

export default Reducer2
