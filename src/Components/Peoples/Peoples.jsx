import React from 'react';
import { Typography, Button, Row, Col, Image, Space } from 'antd';
import './Peoples.css';

const { Title, Paragraph } = Typography;

const Peoples = () => {
  const cardArr = ["/Assets/user3.png", "/Assets/user1.png", "/Assets/user2.png"];

  return (
    <div className="peoples-container">
      <div className="peoples-header">
        <Title className="peoples-title"> they are already taking advantage of it
        </Title>
        <Paragraph className="peoples-subtitle">
          The tried, they converted better, they had a better experience
        </Paragraph>
        <Button className="peoples-button" type="primary">
          To start up
        </Button>
      </div>
      <div className="peoples-images" >
        {cardArr.map((item, index) => (
            <Image
              src={item}
              key={index}
              preview={false}
              alt={`User ${index + 1}`}
              className={`peoples-image ${index !== 1 ? 'image-padding' : ''}`}
            />
        ))}
      </div>
    </div>
  );
};

export default Peoples;

