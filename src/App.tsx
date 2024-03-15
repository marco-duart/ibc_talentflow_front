import GlobalStyles from "./assets/styles/global-styles";
import { ThemeProvider } from "styled-components";
import light from "./assets/styles/theme";
import Router from "./routes";


function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
