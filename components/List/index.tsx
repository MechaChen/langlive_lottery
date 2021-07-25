import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { I_Drawer } from '@redux/reducer'
import * as Styled from './styles'

function List() {
    const { List } = useSelector((state: RootState) => state)

    return (
        <Styled.Container>
            <h3>參與抽獎者名單</h3>
            <Styled.List>
                {List.map(({ id, name }: I_Drawer) => (
                    <Styled.Drawer key={id}>{name}</Styled.Drawer>
                ))}
            </Styled.List>
        </Styled.Container>
    )
}

export default List
