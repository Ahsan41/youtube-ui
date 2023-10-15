import React from 'react';
import styled from 'styled-components';
import download from "../images/logo.png"
// import "../App.css"
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Container = styled.div`
  flex:1;
  background: ${({ theme }) => theme.bgLighter} ;
  height: fit-content;
  font-size: 14px;
  color:${({ theme }) => theme.text};
  position: sticky; 
  top:0;
`
const Wrapper = styled.div`
padding: 18px 26px;  
`

const Logo = styled.div`
display: flex;
align-items: center;
gap: 5px;
font-weight: bold;
margin-bottom: 25px;
cursor: pointer;  
`
const Item = styled.div`
display: flex;
align-items: center;
gap: 20px;
padding: 3px 0 ;
cursor: pointer;

&:hover {
  background-color:${({ theme }) => theme.soft}
}

`
const Img = styled.img`
  height: 25px;
`;
const Hr = styled.hr`
margin:  15px 0;
border:0.5px solid ${({ theme }) => theme.soft}
`

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 300;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
font-size: 14px;
font-weight: 500;
color: #aaaaaa;
margin-bottom: 20px;
`;

const Menu = ({ darkmode, setdarkmode }) => {
  // const { currentUser } = useSelector((state )=> state.user.currentUser)
  return(
    <Container>
    <Wrapper>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Logo className='logo'>
          <Img src={download} />
          WatchHere
        </Logo>
      </Link>
      <Item>
        <HomeIcon />
        Home
      </Item>

      <Link to="trend" style={{ textDecoration: "none",color:"inherit"  }}>
        <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
      </Link>
      <Item onClick={() => setdarkmode(!darkmode)}>
        <SettingsBrightnessOutlinedIcon />
        {darkmode ? "Light" : "Dark"} Mode
      </Item>
      <Link to="subscription" style={{ textDecoration:"none" ,color:"inherit" }}>
      <Item>
        <SubscriptionsOutlinedIcon />
        Subscriptions
      </Item>
      </Link>
      <Hr />
      <Item>
        <VideoLibraryOutlinedIcon />
        Library
      </Item>
      <Item>
        <HistoryOutlinedIcon />
        History
      </Item>
      <Hr />
      { 
      //  !currentUser && 

        <>
      <Login>
        Sign in to like videos, comment, and subscribe.
        <Link to="signin" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Link>
      </Login>
      <Hr /> 
      </>
      }
      <Title>BEST OF LAMATUBE</Title>
      <Item>
        <LibraryMusicOutlinedIcon />
        Music
      </Item>
      <Item>
        <SportsBasketballOutlinedIcon />
        Sports
      </Item>
      <Item>
        <SportsEsportsOutlinedIcon />
        Gaming
      </Item>
      <Item>
        <MovieOutlinedIcon />
        Movies
      </Item>
      <Item>
        <ArticleOutlinedIcon />
        News
      </Item>
      <Item>
        <LiveTvOutlinedIcon />
        Live
      </Item>
      <Hr />
      <Item>
        <SettingsOutlinedIcon />
        Settings
      </Item>
      <Item>
        <FlagOutlinedIcon />
        Report
      </Item>
      <Item>
        <HelpOutlineOutlinedIcon />
        Help
      </Item>
    </Wrapper>
  </Container>
)
      }

export default Menu;
