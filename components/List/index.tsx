import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { I_Drawer } from '@redux/reducer'
import * as Styled from './styles'

function List() {
    // useSelector 會執行 strict reference，
    // 若只取 一個屬性且屬性不會變動，
    // 則不會觸發 re-render
    const List = useSelector((state: RootState) => state.List)

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
