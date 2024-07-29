import styled from "styled-components";

const HeaderWrapper = styled.div`
    background-color: blue;
    height: 50px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;

    h1 {
        margin: 0;
        font-size: 1.5em; 
    }
`;

export default function Header(){
    return (
        <HeaderWrapper>
            <h1>Final Project</h1>
        </HeaderWrapper>
    )
}
