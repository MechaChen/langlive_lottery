import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTime, decreTime, setTimer } from '@redux/actions'
import { RootState } from '@redux/store'
import * as Styled from './styles'

function CountDown() {
    const Timer = useSelector((state: RootState) => state.Timer)
    const [inputVal, setInputVal] = useState<string>('')

    const dispatch = useDispatch()

    const startCountDown = () => {
        if (!inputVal.match(/\d/g)) return alert('請輸入數字')
        if (Number(inputVal) < 0) return alert('請輸入大於 0 的數字')
        if (Number(inputVal) > 60) return alert('請輸入小於 60 的數字')

        // 設定初始時間
        dispatch(setTime(Number(inputVal) * 60))
        // 啟動倒數計時器
        let newTimer = setInterval(() => dispatch(decreTime(1)), 1000)
        dispatch(setTimer(newTimer))
    }

    return (
        <div>
            <h3>抽獎時間</h3>
            <label>
                <input
                    type="number"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    disabled={!!Timer}
                />
                分鐘
            </label>
            <Styled.Button onClick={startCountDown} disabled={!!Timer}>
                {!!Timer ? '倒數中' : '開始倒數'}
            </Styled.Button>
        </div>
    )
}

export default CountDown
