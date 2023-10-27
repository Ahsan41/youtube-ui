import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import styled from 'styled-components';
import axios from 'axios';


const Container =styled.div`
    
 display: flex;
 justify-content: space-between;
 flex-wrap: wrap;
`

const Home = ({type}) => {
  const [video , setVideo] = useState([])
  
  try {
   useEffect(()=>{
    const fetchVideo = async ()=>{
        console.log(type,"iiiii");

        const res = await axios.get(`http://localhost:4000/video/${type}`)
        console.log(res.data);
        setVideo(res.data)
    }
    
    fetchVideo()
    },[type])
        
    } catch (error) {
        console.log(error);
    }

    return (
    
    <Container>
    
    {
        video.map((video)=>(

            <Card key={video._id} video={video}/>
        ))
    }
    
       </Container>
    );
}

export default Home;
