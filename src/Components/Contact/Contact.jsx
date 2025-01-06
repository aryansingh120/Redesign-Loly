import React from 'react';
import { Typography, Button, Row, Col, Image } from 'antd';
import './Contact.css';

const { Title, Paragraph } = Typography;

const Contact = () => {
  const btnArr = ["To start up", "Contact us"];

  return (
    <Row className="contact-container">
      <Col  className="content-col">
        <Title className="main-title">Smart and safe security</Title>
        <Paragraph className="description">
          Secure payments, verified creators, moderators, artificial intelligence checking all the content of the platform to avoid abuse...
        </Paragraph>
        <Paragraph className="description">
          Our high-quality protection systems for technologies secure Loly from end to end.
        </Paragraph>
        <Paragraph className="description">
          Our high-quality protection systems for technologies secure Loly from end to end.
        </Paragraph>
        <Row className="button-row">
          {btnArr.map((item, index) => (
            <Col key={index}>
              <Button
                className={`custom-button ${index === 0 ? 'primary-button' : 'secondary-button'}`}
                block
              >
                {item}
              </Button>
            </Col>
          ))}
        </Row>
      </Col>
      <Col className="image-col">
        <Image
          src="./Assets/wheel.jpg"
          alt="img not available"
          className="wheel-image"
          preview={false}
        />
      </Col>
    </Row>
  );
};

export default Contact;

