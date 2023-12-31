import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import download from "../images/logo.png"
import { Link } from 'react-router-dom';
import {format} from "timeago.js"
import axios from 'axios';

const Container = styled.div`
width: ${(props) => props.type !== "sm" && "360px"};
margin-bottom: ${(props)=> props.type === "sm" ? "10px" : "45px"};
cursor: pointer;
display:${(props)=> props.type === "sm" && "flex"};
gap:20px;
`
const Image = styled.img`
 width: 100%;
 height: ${(props)=> props.type === "sm" ? "100px" : "202px"};
 background-color: #999;
`
const Details = styled.div`
  display:flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"} ;
  gap:12px;
`;

const ChannelImage = styled.img`
width: 36px;
height: 36px;
border-radius: 50%;
background-color:#999;
display:${(props)=>props.type === "sm" && "none" };
`;
const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
const Card = ({type , video}) => {
  const [channel , setChannel] = useState([])
  console.log(video);
   useEffect(()=>{
    const fetchVideo = async ()=>{

        const res = await axios.get(`http://localhost:4000/user/find/${video?.userId}`)
        setChannel(res.data)

    }
    console.log();
    fetchVideo()
    },[video?.userId])
  
  return(

    
    <Link to={`/video/${video._id}`} style={{textDecoration:"none"}}>
  <Container type={type}>
    <Image type={type} src={video?.imgUrl} />
    <Details type={type}>
      <ChannelImage src={channel.img}/>
      <Texts>
        <Title>{video?.tittle}</Title>
        <ChannelName>{channel?.name}</ChannelName>
        <Info>{video?.views} views . {format(video?.createdAt)}</Info >
      </Texts>
    </Details>
  </Container>
  </Link>
);

}

export default Card;
