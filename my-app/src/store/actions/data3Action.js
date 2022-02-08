import {SET_DATA3} from './types'

export const setData3 = (data3)=> {
    console.log(data3, 'masuk action3')
    return {
        type : SET_DATA3,
        payload : data3
    }
}