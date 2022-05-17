import styled from 'styled-components';

export const Content = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @keyframes fromTop {
        0% {
            opacity: 0;
            transform: translateY(100%);
            
        }
        50% {
            opacity: 0;
            transform: translate(50);
        }
        100% {
            opacity: 1;
            transform: translate(0);
        }
    }
    img {
        animation: fromTop 1s;
    }
    h1 {
        animation: fromTop 1s;
        color: #fff;
        text-shadow: 0 10px 18px rgb(0 0 0 / 38%);
        font-size: 2.8em;
    }
    .info {
        text-align: center;
        line-height: 5rem;
        h3 {
            animation: fromTop 2s;
        }
        span {
            font-weight: bold;
        }
        a {
            text-decoration: none;
            color: #000;
            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }
        h2 {
            color: #fff;
            font-size: 1.8em;
            animation: fromTop 3s;
        }
        .socials {
            animation: fromTop 4s;
            display: flex;
            justify-content: space-between;
            transition: .4s;
            img:hover {
                transform: scale(1.1);
                transition: .4s;
            }
        }
    }
`