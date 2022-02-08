import {SET_DATA2} from './types'

export const setData2 = (data2)=> {
    console.log(data2, 'masuk action2')
    return {
        type : SET_DATA2,
        payload : data2
    }
}