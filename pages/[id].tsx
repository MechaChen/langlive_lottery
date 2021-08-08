import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { I_Drawer } from '@redux/reducer'
import { useRouter } from 'next/router'
import * as Styled from './styles/owner'

function Owner() {
    const { List } = useSelector((state: RootState) => state)
    const [owner, setOwner] = useState<I_Drawer>({ id: '', name: '' })
    const router = useRouter()

    useEffect(() => {
        const id = window?.location.pathname.replace('/', '')
        const owner = List.find((drawer) => drawer.id === id)
        setOwner(owner)
    }, [])

    const backToHome = () => {
        router.push('/')
    }

    return (
        <Styled.Container>
            <h3>抽獎結果</h3>
            <Styled.Text>{owner.name}</Styled.Text>
            <Styled.Button onClick={backToHome}>返回抽獎頁</Styled.Button>
        </Styled.Container>
    )
}

export default Owner
