import { DECRE_TIME, SET_TIME } from './actionTypes'

export const setTime = (time: number) => ({
    type: SET_TIME,
    payload: time,
})

export const decreTime = (amount: number) => ({
    type: DECRE_TIME,
    payload: amount,
})
