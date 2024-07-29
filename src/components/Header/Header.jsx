import styled from "styled-components";

const HeaderWrapper = styled.div`
    background-color: grey;
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
    }
`;

export default function Header(){
    return (
        <HeaderWrapper>
            <h1> Car Comparison Website - Final Project</h1>
        </HeaderWrapper>
    )
}
