// Mui연습
// import MuiPractice from "./components/MuiPracticec";
// import { blue, green, red } from "@mui/material/colors";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

import { QueryClient, QueryClientProvider } from 'react-query';
import Counter2 from './components/Counter2';
import Example from './components/ReactQueryExample/Example';
import QuickStart from './components/ReactQueryExample/QuickStart';
import ReduxStudy from './components/ReduxStudy.tsx';
import Cache from './components/SWRExample/Cache';
import Feacher from './components/SWRExample/Feacher';
import Mutate from './components/SWRExample/Mutate';
import Pagenation from './components/SWRExample/Pagenation';
import Profile from './components/SWRExample/Profile';
import TestMocking from './components/TestMocking';
import Counter from './features/counter/Counter';
import { ReactQueryDevtools } from 'react-query/devtools';
import Pagination from './components/ReactQueryExample/Pagination';
import InfiniteScroll from './components/ReactQueryExample/InfiniteScroll';
const queryClient = new QueryClient();
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
      {/* <h1>리액트연습</h1> */}
      {/* <h2>카운터</h2> */}
      {/* <Counter /> */}
      {/* <br /> */}
      {/* <h2>리덕스</h2> */}
      {/* <Counter2 /> */}
      {/* <h2>데이터 모킹 라이브러리</h2> */}
      {/* <ReduxStudy /> */}
      {/* <TestMocking /> */}
      {/* <h2>데이터 페칭 라이브러리</h2> */}
      {/* <h3>SWR</h3> */}
      {/* <h4>기본</h4> */}
      {/* <Profile /> */}
      {/* <h4>캐시 다루기</h4> */}
      {/* <Cache /> */}
      {/* <h4>에러 핸들링</h4> */}
      {/* <Feacher /> */}
      {/* <Mutate /> */}
      {/* <Pagenation /> */}
      <h3>React-query</h3>
      <QueryClientProvider client={queryClient}>
        {/* <Example /> */}
        {/* <QuickStart /> */}
        {/* <Pagination /> */}
        <InfiniteScroll />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
