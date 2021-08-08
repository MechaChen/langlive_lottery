import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { RootState } from '@redux/store'
import { setTimer } from '@redux/actions'
import * as Styled from './styles'

function Time() {
    const { Time, Timer, List } = useSelector((state: RootState) => state)
    const [animateTime, setAnimateTime] = useState<number>(0)
    const router = useRouter()

    const dispatch = useDispatch()

    // 倒數到 0 時停止
    useEffect(() => {
        if (Time === 0 && Timer) {
            clearInterval(Timer)
            dispatch(setTimer(undefined))

            let owner = List[Math.floor(Math.random() * List.length)]
            router.push(`/${owner.id}`)
        }
    }, [Time])

    useEffect(() => {
        setAnimateTime(Time);
    }, [Timer])

    const covertToClock = () => {
        let minute: string | number = Math.floor(Time / 60)
        let second: string | number = Time % 60

        minute < 10 && (minute = `0${minute}`)
        second < 10 && (second = `0${second}`)

        return `${minute}:${second}`
    }

    return (
        <Styled.Container>
            <Styled.Text>{covertToClock()}</Styled.Text>
            <Styled.Circle LoopTime={animateTime}>
                <circle r="98" cx="100" cy="100"></circle>
            </Styled.Circle>
        </Styled.Container>
    )
}

export default Time
