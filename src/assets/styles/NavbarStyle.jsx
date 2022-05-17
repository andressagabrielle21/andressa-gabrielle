import styled from 'styled-components';

export const Container = styled.div`
    background: rgba(107, 154, 255, 0.45);
    color: #fff;
    padding: .8rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .3);
    .Content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2 {
            font-family: 'Oleo Script Swash Caps', cursive;
            font-size: 27px;
        }
    }
`

export const Links = styled.div`
    a {
        text-decoration: none;
        margin-right: .8em;
        font-size: 18px;
        color: #fff;
        &:hover {
            transition: .4s;
            font-weight: bold;
        }
    }
`
