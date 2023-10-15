import { SearchOutlined, VideoCallOutlined } from '@mui/icons-material';
import AccountCircleOutlinedIcon  from "@mui/icons-material/AccountCircleOutlined";
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
positon:sticky;
top:0;
background-color:${({ theme }) => theme.bgLighter};
height:56px;
`
const Wrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: flex-end;
 position: relative;
 height: 100%;
`
const Search = styled.div`
position:absolute;
width: 40%;
left: 0;
right: 0;
margin: auto;
display: flex;
justify-content: space-between;
align-items: center;
padding: 5px;
border: 1px solid #ccc;
border-radius: 3px;
`

const Input = styled.input`
border: none;
background-color: transparent;
outline:"none"
padding:"6px
`


const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 300;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Avatar = styled.img`
width: 32px;
height: 32px; 
border-radius: 50%;
background: #999;
`

const Navbar = () => {
//     const { currentUser } = useSelector((state) => state.user)
       
//     return (
//         <Container>
//             <Wrapper>
//                 <Search>
//                     <Input placeholder='search' />
//                     < SearchOutlined />
//                 </Search>
//               {currentUser ? 
//                  (<User>
                    
//                     <VideoCallOutlined/>
//                     <Avatar/>
//                     {currentUser.name}
//                 </User> ) : (<Link to='signin' style={{ textDecoration: "none", color: "inherit" }}>
//                     <Button>
//                         <AccountCircleOutlinedIcon />
//                         SIGN IN
//                     </Button>
//                 </Link>)
//                 }
//             </Wrapper>

//         </Container>

//     );
}

export default Navbar;
