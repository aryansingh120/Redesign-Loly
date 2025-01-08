import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import './Hero.css';

const { Title, Paragraph } = Typography;

const Hero = () => {
  return (
    <Row className="hero_section" align='top'>
      <Col className="hero_content">
        <Title className="hero_title">The <br className='break_line' /> exclusive <br className='break_line' /> experience</Title>
        <div className="hero_description">
          <Paragraph strong className='para4'>Want to monetize your content? Try loly</Paragraph>
          <Paragraph strong className='para4'>No matter how you want to convert, Loly has you covered.</Paragraph>
          <Paragraph strong className='para4'>Sign up for free in one Click.</Paragraph>
        </div>
        <div className="hero_buttons">
          <Button  className="hero_button2 primary_button">Creator</Button>
          <Button  className="hero_button2 secondary_button">Fans</Button>
        </div>
        <Button className="hero_button2 start_up_button">To Start up</Button>
      </Col>
      <Col   className="hero_image_container">
        <img src="./Assets/hand.webp" alt="Hand" className="hero_image" />
      </Col>
    </Row>
  );
};

export default Hero;
