import styled, { createGlobalStyle } from 'styled-components';
import Board from './pages/Board/Board';
import Header from './components/Header/Header';
import Backlog from './pages/Backlog/Backlog';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: grey;
        margin: 0;
        font-family: "American Typewriter";
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
`;

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContentWrapper = styled.div`
    display: flex;
    width: 100%;
`;

const BoardWrapper = styled.div`
    flex: 2;
    display: flex;
    justify-content: center; 
`;

const BacklogWrapper = styled.div`
    flex: 1;
    overflow-y: auto;
    max-height: 80vh;
    margin-left: 20px;
`;

function App() {
    return (
        <>

            <GlobalStyle />
            <AppWrapper>
                <Header />
                <ContentWrapper>
                    <BoardWrapper>
                        <Board />
                    </BoardWrapper>
                    <BacklogWrapper>
                        <Backlog />
                    </BacklogWrapper>
                </ContentWrapper>
            </AppWrapper>
        </>
    );
}

export default App;
