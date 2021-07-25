import List from '@components/List'
import CountDown from '@components/CountDown'
import * as Styled from './styles'

const HomePage = () => {
    return (
        <Styled.Container>
            <CountDown />
            <List />
        </Styled.Container>
    )
}

export default HomePage
