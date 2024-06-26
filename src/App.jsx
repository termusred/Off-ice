import GlobalStyle from "./globalStyles"
import { Light } from "./constants/theme.js"
import { ThemeProvider } from "styled-components"
import RoutesContainer from "./components/routes"
function App({routes}) {
  return (
    <>
      <ThemeProvider theme={Light}>
        <GlobalStyle />
        <RoutesContainer routes={routes}></RoutesContainer>
      </ThemeProvider>
    </>
  )
}

export default App
