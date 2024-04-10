import React, { useState } from 'react';
import './ReviewBox.css'

const ReviewBox = ({review}) => {
  const [show,setShow] = useState(false) 
  const showHideTxt = (e) => {
    if(!show){
      e.target.parentElement.classList.add('active');
      setShow(true)
    }else{
      e.target.parentElement.classList.remove('active');
      setShow(false)
    }
  }
  return (
    <div className='review-box'>
      <div className='review-top'>
        <span>{review.author}</span><span>{review.updated_at.substr(0,10)}</span>
      </div>
      <div className='review-content'>
        <span className='txt-box'>{review.content}</span><button className='more-btn' onClick={showHideTxt}></button>
      </div>
    </div>
  )
}

export default ReviewBox
