import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { darkTheme, lightTheme } from './utills/Theme';
import { useState } from 'react';
import Home from './pages/Home.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect as Redirect,
  Navigate
} from "react-router-dom";
import Video from './pages/video';
import Signin from './pages/signin';
import Search from './pages/search.jsx';

const Container = styled.div`
display:flex;
`
console.log(Signin);
const Main = styled.div`
background: ${({ theme }) => theme.bg} ;
flex:7;
`
const Wrapper = styled.div`
padding:22px 96px
`
function App() {
  const [darkmode, setdarkmode] = useState(true);
  return (
    <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>

      <Container>
        <Router>
          <Menu darkmode={darkmode} setdarkmode={setdarkmode} />
          <Main>
            <Navbar />
            <Wrapper>
             <Home />
              <Routes>
                <Route path='/'>
                  <Route index element={<Home type='random' />} />
                  <Route path='trend' element={<Home type='trend' />} />
                  <Route path='subscription' element={<Home type='sub' />} />
                  <Route path='signin' element={<Signin />} />
                  <Route path='search' element={<Search />} />

                  <Route path='video'>
                    <Route path=':id' element={<Video />} />
                  </Route>
                </Route>

              </Routes>
              {/* <Card /> */}
            </Wrapper>
          </Main>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
