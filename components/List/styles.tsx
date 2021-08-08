import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    @media all and (min-width: 980px) {
        width: 50%;
    }
`

export const List = styled.ul`
    padding: 10px 15px;
    max-height: 260px;
    overflow-y: auto;
    border: 1px solid #ccc;
    border-radius: 4px;
`

export const Drawer = styled.li`
    display: block;
    margin-bottom: 10px;
    padding: 10px;
    height: 40px;
    box-sizing: border-box;
    background: #ccc;
    border-radius: 4px;
`
