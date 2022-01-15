import ButtonExample from "./components/ButtonExample";
import { blue, green, red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
function App() {
  const theme = createTheme({
    palette: {
      // primary: {
      //   main: blue[500],
      // },
      secondary: {
        main: "#d65d00",
      },
    },
    shape: {
      borderRadius: 24,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <ButtonExample />
    </ThemeProvider>
  );
}

export default App;
