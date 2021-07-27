import { DECRE_TIME, SET_TIME } from './actionTypes'

export interface I_Drawer {
    id: string
    name: string
}

interface I_State {
    Time: number
    List: Array<I_Drawer>
}

const defaultState: I_State = {
    Time: 0,
    List: [
        { id: '1', name: '釘手中' },
        { id: '2', name: '憐剩文' },
        { id: '3', name: '科文摺' },
        { id: '4', name: '菜陰文' },
        { id: '5', name: '正文摻' },
        { id: '6', name: '誠實中' },
        { id: '7', name: '鍋臺鳴' },
        { id: '8', name: '臨場左' },
    ],
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
