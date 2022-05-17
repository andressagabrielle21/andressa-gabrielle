import styled from 'styled-components';

export const Container = styled.div `
    background: rgba(255, 255, 255, 0.5);
    margin: 3rem 1rem;
    padding: 1.5rem 2rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .text {
        h2 {
            margin-bottom: 1.5em;
        }
        p {
            font-size: 18px;
            line-height: 1em;
            margin-bottom: 1.5em;
        }
    }
    img {
        width: 25em;
        height: 14em;
        border-radius: 10px;
    }
`