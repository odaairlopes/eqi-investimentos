import Board from "./components/Board";
import Header from "./components/Header";
import Simulator from "./components/Simulator";
import { GlobalStyles } from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Board />
    </>
  );
}

export default App;
