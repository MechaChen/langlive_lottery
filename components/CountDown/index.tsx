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

    useEffect(() => {
        let timerId
        if (isStart) {
            timerId = setInterval(() => {
                dispatch(decreTime(1))
            }, 1000)
        }

        return () => clearInterval(timerId)
    }, [isStart])

    const startCountDown = () => {
        if (!inputVal.match(/\d/g)) alert('請輸入數字')

        dispatch(setTime(Number(inputVal) * 60))
        setIsStart(true)
    }

    const covertToClock = () => {
        let minute: string | number = Math.floor(Time / 60)
        let second: string | number = Time % 60

        minute < 10 && (minute = `0${minute}`)
        second < 10 && (second = `0${second}`)

        return `${minute}:${second}`
    }

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
            <div>{covertToClock()}</div>
        </Styled.Container>
    )
}

export default CountDown
