import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    max-width: 980px;
    padding: 0 10px;
    box-sizing: border-box;
`

export const CountDownContainer = styled.div`
    width: 100%;

    @media all and (min-width: 980px) {
        width: 50%;
        padding-right: 20px;
        box-sizing: border-box;
    }
`

export const NoData = styled.div`
    padding-top: 30px;
    font-size: 20px;
`
