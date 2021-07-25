import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@redux/store'
import { setTime, decreTime } from '@redux/actions'
import * as Styled from './styles'

function CountDown() {
    const [inputVal, setInputVal] = useState<string>('')
    const { Time } = useSelector((state: RootState) => state)

    const dispatch = useDispatch()
    const [isStart, setIsStart] = useState<boolean>(false)

    const startCountDown = () => {
        if (!inputVal.match(/\d/g)) alert('請輸入數字')

        dispatch(setTime(Number(inputVal)))
        setIsStart(true)
    }

    useEffect(() => {
        let timerId
        if (isStart) {
            timerId = setInterval(() => {
                dispatch(decreTime(1))
            }, 1000)
        }

        return () => clearInterval(timerId)
    }, [isStart])

    return (
        <Styled.Container>
            <h3>抽獎時間</h3>
            <label>
                <input
                    type="number"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                />
                分鐘
            </label>
            <button onClick={startCountDown}>設定</button>
            <div>{Time}</div>
        </Styled.Container>
    )
}

export default CountDown
