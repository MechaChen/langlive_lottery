import List from '@components/List'
import Time from '@components/Time'
import * as Styled from './styles'

const HomePage = () => {
    return (
        <Styled.Container>
            <Time />
            <List />
        </Styled.Container>
    )
}

export default HomePage
