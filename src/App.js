// Mui연습
// import MuiPractice from "./components/MuiPracticec";
// import { blue, green, red } from "@mui/material/colors";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

import Counter2 from "./components/Counter2";
import ReduxStudy from "./components/ReduxStudy.tsx";
import TestMocking from "./components/TestMocking";
import Counter from "./features/counter/Counter";
function App() {
  // Mui연습
  // const theme = createTheme({
  //   palette: {
  //     // primary: {
  //     //   main: blue[500],
  //     // },
  //     secondary: {
  //       main: "#d65d00",
  //     },
  //   },
  //   shape: {
  //     borderRadius: 24,
  //   },
  // });
  // const theme2 = createTheme({
  //   palette: {
  //     primary: {
  //       main: blue[900],
  //     },
  //     secondary: {
  //       main: "#d65d00",
  //     },
  //   },
  //   shape: {
  //     borderRadius: 4,
  //   },
  // });
  return (
    // // 중첩 테마 공부
    // <ThemeProvider theme={theme}>
    //   <MuiPractice />
    //   <ThemeProvider theme={theme2}>
    //     <MuiPractice />
    //   </ThemeProvider>
    // </ThemeProvider>
    <>
      <Counter />
      <br />
      <br />
      <br />
      <br />
      <Counter2 />
      {/* <ReduxStudy /> */}
      <TestMocking />
    </>
  );
}

export default App;
