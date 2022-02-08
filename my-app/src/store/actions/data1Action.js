import {SET_DATA1} from './types'

export const setData1 = (data1)=> {
    console.log(data1, 'masuk action')
    return {
        type : SET_DATA1,
        payload : data1
    }
}