import React from 'react';
import { Modal } from 'react-bootstrap';
import { useMovieVideoQuery } from '../../../../hooks/useMovieDetail';
import './MovieVideo.css';
import YouTube from 'react-youtube';


const MovieVideo = ({show,closeModal,id}) => {
const {data} = useMovieVideoQuery(id);
let videoId;
const trailer = data?.results.find((video) => video.name==='Official Trailer');
trailer? videoId = trailer.key : videoId = data?.results[0].key;
const opts = {
    playerVars: {
        origin: window.location.origin
      }
}
if(!data?.results || data?.results.length===0){
    return <Modal show={show} onHide={closeModal} className='video-modal'>
    <Modal.Header closeButton>
        <Modal.Title>Related Video</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <div>관련 영상이 없습니다.</div>
    </Modal.Body>
</Modal>
}
  return (
    <Modal show={show} onHide={closeModal} className='video-modal'>
        <Modal.Header closeButton>
            <Modal.Title>Related Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <YouTube videoId={videoId} opts={opts} />
        </Modal.Body>
    </Modal>
  )
}

export default MovieVideo
