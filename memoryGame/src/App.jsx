import GlobalStyle from "./GlobalStyle";
import MainPage from "./MainPage";
import {ThemeProvider} from 'styled-components';
import {theme} from './theme';

function App() {

  return (
    <>
    <ThemeProvider theme = {theme} >
      <GlobalStyle />
      <MainPage/>
    </ThemeProvider>
    </>
  );
}

export default App;