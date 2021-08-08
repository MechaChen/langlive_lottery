import styled, { css } from 'styled-components'

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`

export const Text = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Circle = styled.svg`
    width: 200px;
    height: 200px;
    transform: rotateY(-180deg) rotateZ(-90deg);

    circle {
        stroke-dasharray: 628px;
        stroke-dashoffset: 0px;
        stroke-linecap: round;
        stroke-width: 5px;
        stroke: ${(props) => (props.LoopTime > 0 ? '#26bec9' : '#666')};
        fill: none;
        animation: ${(props) =>
            props.LoopTime > 0 &&
            css`
                countdown ${(props) => props.LoopTime}s linear forwards;
            `};
    }

    @keyframes countdown {
        from {
            stroke-dashoffset: 0px;
        }
        to {
            stroke-dashoffset: 628px;
        }
    }
`
