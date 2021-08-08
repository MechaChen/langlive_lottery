import { DECRE_TIME, SET_TIME, SET_TIMER } from './actionTypes'

export const setTime = (time: number) => ({
    type: SET_TIME,
    payload: time,
})

export const setTimer = (timer: NodeJS.Timer) => ({
    type: SET_TIMER,
    payload: timer,
})

export const decreTime = (amount: number) => ({
    type: DECRE_TIME,
    payload: amount,
})
