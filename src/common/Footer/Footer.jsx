import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap'
import './Footer.css'


const Footer = () => {
  return (
    <section id='footer'>
    <Container>
        <ul>
            <li><a href='https://github.com/allezvvell'><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href='/'><FontAwesomeIcon icon={faEnvelope} /></a></li>
        </ul>
        <p>본 페이지는 상업적 용도가 아닌 개인 프로젝트용입니다.</p>
        <p>Copyright ⓒ SEHYUN KIM All Rights Reserved.</p>
    </Container>
    </section>
  )
}

export default Footer
