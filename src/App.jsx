import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

import MainLayout from "./pages/MainLayout/index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainLayout />
      </Router>
    </ThemeProvider>
  );
}

export default App;
