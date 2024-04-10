import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useMovieVideoQuery } from '../../../../hooks/useMovieDetail';
import YouTube from 'react-youtube';
import './MovieVideo.css';


const MovieVideo = ({show,closeModal,id}) => {
const {data} = useMovieVideoQuery(id);
const [videoId,setVideoId] = useState(null);
const getVideoId = () => {
    if(data?.results.find((video) => video.name==='Official Trailer')){
        const trailer = data?.results.find((video) => video.name==='Official Trailer');
        setVideoId(trailer.key);
        return
    }
    setVideoId(data?.results[0].key);
}
const opts = {
    playerVars:{
        origin: 'https://react-nflix.netlify.app'
    }
}

useEffect(()=>{
    getVideoId()
    //eslint-disable-next-line react-hooks/exhaustive-deps
},[])

  return (
    <Modal show={show} onHide={closeModal} className='video-modal'>
        <Modal.Header closeButton>
            <Modal.Title>Related Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <YouTube
                videoId={videoId} 
                opts={opts}  
                />
        </Modal.Body>
    </Modal>
  )
}

export default MovieVideo
