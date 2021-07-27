import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { I_Drawer } from '@redux/reducer'

function Owner() {
    const { List } = useSelector((state: RootState) => state)
    const [owner, setOwner] = useState<I_Drawer>({ id: '', name: '' })

    useEffect(() => {
        const id = window?.location.pathname.replace('/', '')
        const owner = List.find((drawer) => drawer.id === id)
        setOwner(owner)
    }, [])

    return (
        <div>
            <h3>抽獎結果</h3>
            <div>{owner.name}</div>
        </div>
    )
}

export default Owner
