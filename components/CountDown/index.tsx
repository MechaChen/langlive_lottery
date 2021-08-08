import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@redux/store'
import { useRouter } from 'next/router'
import { setTime, decreTime } from '@redux/actions'
import * as Styled from './styles'

function CountDown() {
    const { Time, List } = useSelector((state: RootState) => state)
    const [inputVal, setInputVal] = useState<string>('')
    const [timer, setTimer] = useState<NodeJS.Timer>()
    const router = useRouter()

    const dispatch = useDispatch()

    // 倒數到 0 時停止
    useEffect(() => {
        if (Time === 0 && timer) {
            clearInterval(timer)

            let owner = List[Math.floor(Math.random() * List.length)]
            router.push(`/${owner.id}`)
        }
    }, [Time])

    const startCountDown = () => {
        if (!inputVal.match(/\d/g)) return alert('請輸入數字')
        if (Number(inputVal) < 0) return alert('請輸入大於 0 的數字')
        if (Number(inputVal) > 60) return alert('請輸入小於 60 的數字')

        // 設定初始時間
        dispatch(setTime(Number(inputVal) * 60))
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
            <button onClick={startCountDown} disabled={!!timer}>
                {!!timer ? '倒數中' : '開始倒數'}
            </button>
            <div>{covertToClock()}</div>
        </Styled.Container>
    )
}

export default CountDown
