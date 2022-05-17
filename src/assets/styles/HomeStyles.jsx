import styled from "styled-components";

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
        .text {
            font-size: 20px;
            line-height: 4rem;
            h2 {
                margin-bottom: 3rem;
                animation: fromTop 1s;
            }
            h1 {
                animation: fromTop 3s;
            }
        }
        img {
            animation: fromTop 1.5s;
        }
        span {
            color: #fff;
            text-shadow: 0 10px 18px rgb(0 0 0 / 38%);
        }
    }
`