/* Ethan */
import styled from "styled-components";

/* Header Styling */
const HeaderWrapper = styled.div`
    background-color: dimgrey;
    height: 15%; 
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;

    h1 {
        font-size: 1.5em; 
        margin: 5vh;
        text-align: right;
        animation: left_to_right 3s ease;
    }
    @keyframes left_to_right {
        from {
            margin-left: -100%;
        }
        to {
            margin-left: 0;
        }
`;

/* Ethan */
/* Header for the webpage */
export default function Header(){
    return (
        <HeaderWrapper>
            <h1> Car Comparison Website - Final Project</h1>
        </HeaderWrapper>
    )
}
