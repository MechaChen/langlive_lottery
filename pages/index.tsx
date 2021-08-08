import List from '@components/List'
import Setter from '@components/Setter'
import Time from '@components/Time'
import * as Styled from './styles'

const HomePage = () => {
    return (
        <Styled.Container>
            <Styled.CountDownContainer>
                <Setter />
                <Time />
            </Styled.CountDownContainer>
            <List />
        </Styled.Container>
    )
}

export default HomePage
