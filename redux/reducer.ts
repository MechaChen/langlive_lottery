import { DECRE_TIME, SET_TIME } from './actionTypes'

interface I_State {
    Time: number
}

const defaultState: I_State = {
    Time: 0,
}

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case SET_TIME:
            return { ...state, Time: action.payload }
        case DECRE_TIME:
            return { ...state, Time: state.Time - action.payload }
        default:
            return state
    }
}
