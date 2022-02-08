import {SET_DATA4} from './types'

export const setData4 = (data4)=> {
    console.log(data4, 'masuk action4')
    return {
        type : SET_DATA4,
        payload : data4
    }
}