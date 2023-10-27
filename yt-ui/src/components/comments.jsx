import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Comment from "./comment.jsx";
import { useSelector } from "react-redux";
import axios from "axios";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Comments = ({videoId}) => {

  
    const user  =  useSelector((state) => state.persistedReducer.currentUser.currentUser)

    const [comments, setComments] = useState([]);

    const token = user?.token;
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
  
  const bodyParameters = {
     key: "qwertyuiop"
  };
  
  
  useEffect(() => {
      const fetchComments = async () => {
          try {
              const res = await axios.get(`http://localhost:4000/comment/${videoId}`, config , bodyParameters );
              setComments(res.data);
              console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchComments();
    }, [videoId]);
    console.log('comments:', comments);
    
  return (
    <Container>
      <NewComment>
        <Avatar src={user.img}/>
        <Input placeholder="Add a comment..." />
      </NewComment>

      {
        comments.map((com)=>(
            <Comment comment={com} key={com._id}/>
        ))
      } 
      
     

    </Container>
  );
};

export default Comments;