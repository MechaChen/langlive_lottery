import List from '@components/List'
import Setter from '@components/Setter'
import Time from '@components/Time'
import * as Styled from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'

const HomePage = () => {
    const ListData = useSelector((state: RootState) => state.List)

    return (
        <Styled.Container>
            {ListData.length > 1 ? (
                <>
                    <Styled.CountDownContainer>
                        <Setter />
                        <Time />
                    </Styled.CountDownContainer>
                    <List />
                </>
            ) : (
                <Styled.NoData>資料不足，請加入更多抽獎者</Styled.NoData>
            )}
        </Styled.Container>
    )
}

export default HomePage
