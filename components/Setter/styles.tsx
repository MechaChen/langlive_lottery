import styled from 'styled-components'

export const Container = styled.div`
    width: 60%;
    display: flex;
`

export const Button = styled.button`
    color: ${(props) => (props.disabled ? '#26bec9' : '#fff')};
    padding: 12px;
    width: 100px;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
    background-color: ${(props) =>
        props.disabled ? 'transparent' : '#26bec9'};
    border: ${(props) =>
        props.disabled ? '1px solid #26bec9' : '1px solid transparent'};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`
