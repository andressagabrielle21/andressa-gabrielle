import styled from 'styled-components';

export const Container = styled.div`
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
    .Content {
        display: flex;
        align-items: center;
        justify-content: space-around;
        min-height: 90vh;
        h2 {
            font-size: 30px;
        }
        .aboutText {
            h2 {
                margin-bottom: 2rem;
                animation: fromTop 1s;
            }
            p {
                width: 40vw;
                line-height: 18px;
                margin-bottom: 2rem;
                font-size: 18px;
                animation: fromTop 2s;
            }
            Button {
                animation: fromTop 2.5s;
            }
        }
        .skills {
            font-size: 18px;
            width: 22vw;
            h2 {
                margin-bottom: 2rem;
                animation: fromTop 3s;
            }
            li {
                line-height: 28px; 
                animation: fromTop 4s;
            }
        }
        span {
            color: #fff;
            text-shadow: 0 10px 18px rgb(0 0 0 / 38%);
        }
    }
`