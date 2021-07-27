import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@redux/store'
import { setTime, decreTime } from '@redux/actions'
import * as Styled from './styles'

function CountDown() {
    const [inputVal, setInputVal] = useState<string>('')
    const { Time } = useSelector((state: RootState) => state)
    const [timer, setTimer] = useState<NodeJS.Timer>()

    const dispatch = useDispatch()
    const [isStart, setIsStart] = useState<boolean>(false)

    // 倒數到 0 時停止
    useEffect(() => {
        Time === 0 && clearInterval(timer)
    }, [Time])

    const startCountDown = () => {
        if (!inputVal.match(/\d/g)) alert('請輸入數字')

        // 清除上次的計時器
        clearInterval(timer)

        // 設定初始時間
        dispatch(setTime(Number(inputVal)))
        // 啟動倒數計時器
        let newTimer = setInterval(() => dispatch(decreTime(1)), 1000)
        setTimer(newTimer)
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
