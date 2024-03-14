import GlobalStyles from "./assets/styles/global-styles";
import Login from "./pages/login/login";
import { ThemeProvider } from "styled-components";
import light from "./assets/styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Login />
      </ThemeProvider>
    </>
  );
}

export default App;
