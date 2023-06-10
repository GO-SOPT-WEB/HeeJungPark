import GlobalStyle from "./GlobalStyle";
import MainPage from "./MainPage";
import { RecoilRoot } from "recoil";
function App() {

  return (
    <RecoilRoot>
      <GlobalStyle />
      <MainPage/>
    </RecoilRoot>
  );
}

export default App;

