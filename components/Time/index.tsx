import React, { useState, useEffect } from 'react'
import * as Styled from './styles'

function Time() {
    const [inputVal, setInputVal] = useState<string>('')
    const [time, setTime] = useState<number>(0)
    const [isStart, setIsStart] = useState<boolean>(false)

    const startCountDown = () => {
        if (!inputVal.match(/\d/g)) alert('請輸入數字')

        setTime(Number(inputVal))
        setIsStart(true)
    }

    useEffect(() => {
        let timerId
        if (isStart) {
            timerId = setInterval(() => {
                setTime((time) => time - 1)
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
            <div>{time}</div>
        </Styled.Container>
    )
}

export default Time
