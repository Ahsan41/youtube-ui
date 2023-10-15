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

   useEffect(()=>{
    const fetchVideo = async ()=>{

        const res = await axios.get(`http://localhost:4000/video/${type}`)
        setVideo(res.data)
    }
    fetchVideo()
    },[type])

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
