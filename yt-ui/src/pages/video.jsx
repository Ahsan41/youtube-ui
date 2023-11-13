import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
// import Comments from "../components/Comments";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { dislike, fetchSuccess, like , Su } from "../Redux/VideoSlice";
import { format } from "timeago.js";
import {  ThumbDown, ThumbUp } from "@mui/icons-material";
// import Button from '@mui/material/Button';

import Comments from "../components/comments";
import { subscription } from "../Redux/userSlice";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`;

const Video = () => {
  const  user  = useSelector((state) => state.persistedReducer.currentUser.currentUser)
  // console.log(token);
  
  const  videostate  = useSelector((state) => state.persistedReducer.video.currentVideo)
  
   const [channel,setChannel] = useState({})
 
   const dispatch = useDispatch();
   const path = useLocation().pathname.split("/")[2]
  
  // console.log(user, "user");
  console.log(videostate,"viiideoooooooooo");
  
    useEffect(()=>{
      const fetchData = async () => {
        try {
          const videoRes = await axios.get(`http://localhost:4000/video/find/${path}`);
          const channelRes = await axios.get(
            `http://localhost:4000/user/find/${videoRes.data.userId}`
            );
            console.log(videoRes.data,"channelRes.data")
          setChannel(channelRes.data)
          // console.log(channelRes.data,"channel");
          // console.log(videoRes.data,"lllll");
          dispatch(fetchSuccess(videoRes?.data));
        } catch (err) {
        console.log(err);
        }
      }
      fetchData()
    },[path,dispatch])
    
    const token = user?.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` }
};

const bodyParameters = {
   key: "qwertyuiop"
};

  const HandleLike = async ()=>{
    try {
     await axios.put(`http://localhost:4000/user/like/${videostate._id}`,bodyParameters,config)
     dispatch(like(user._id));
    } catch (error) {
    console.log(error);  
    }
  }
  
  const HandleDislike = ()=>{
    try {
      
      axios.put(`http://localhost:4000/user/dislike/${videostate._id}`,bodyParameters,config)
      dispatch(dislike(user._id));
    } catch (error) {
      console.log(error); 
    }
  }
  
  const handleSub = async () => {
    console.log("hnnnn");
    user.subscribeUsers.includes(channel._id) 
      ? await axios.put(`http://localhost:4000/user/unsub/${channel._id}`)
      : await axios.put(`http://localhost:4000/user/sub/${channel._id}`);
    dispatch(subscription(channel._id));
  };


  return (
    <Container>
      <Content>
        <VideoWrapper>
        <VideoFrame src={videostate.videoUrl} controls/>
        </VideoWrapper>
      <Title>{videostate?.tittle}</Title>
        <Details>
          <Info>{videostate?.views} views • {format(videostate?.createdAt)}</Info>
          <Buttons>
            <Button onClick={HandleLike}>
             { videostate.like.includes(user?._id) ?( <ThumbUp/> ) : (<ThumbUpOutlinedIcon />) } {videostate?.like?.length}
            </Button>
            <Button onClick={HandleDislike}>
             { videostate?.dislike?.includes(user?._id) ? ( <ThumbDown/> ) :  ( <ThumbDownOffAltOutlinedIcon />)} {videostate?.dislike?.length}
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={channel?.img} />
            <ChannelDetail>
              <ChannelName>{channel.username}</ChannelName>
              <ChannelCounter>{channel.Subscribers} subcribers</ChannelCounter>
              <Description>
               {videostate?.desc}
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe onClick={handleSub}>  
          {user?.subscribeUsers?.includes(channel._id)
              ? "SUBSCRIBED"
              : "SUBSCRIBE"}
              </Subscribe>
        </Channel>
        <Hr />
        {/* <Comments videoId={video._id}/> */}
        </Content>
       <Recommendation>
         {/* <Card type="sm"/>
    //     <Card type="sm"/>
    //     <Card type="sm"/>
    //     <Card type="sm"/>
    //     <Card type="sm"/>
    //     <Card type="sm"/>
    //     <Card type="sm"/>
    //     <Card type="sm"/>
    //     <Card type="sm"/>
    //     <Card type="sm"/>
    //     <Card type="sm"/>
    //     <Card type="sm"/>
    //     <Card type="sm"/> */}
    //   </Recommendation>
    // </Container>
  );
};

export default Video;
