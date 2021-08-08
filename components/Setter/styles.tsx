import styled from 'styled-components'

export const Container = styled.div`
    width: 60%;
    display: flex;
`

export const Input = styled.input`
    margin-right: 5px;
    padding: 0 10px;
    line-height: 40px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: ${(props) =>
        props.disabled ? '#ccc' : 'transparent'};
`

export const Button = styled.button`
    margin-left: 15px;
    width: 100px;
    line-height: 40px;
    color: ${(props) => (props.disabled ? '#26bec9' : '#fff')};
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
    background-color: ${(props) =>
        props.disabled ? 'transparent' : '#26bec9'};
    border: ${(props) =>
        props.disabled ? '1px solid #26bec9' : '1px solid transparent'};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`
