import React from 'react';
import { Button, List, Typography } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import './Footer.css';

const { Text } = Typography;

const Footer = () => {
  const contactArr = [
    "Contact",
    "Legal notices",
    "Content Policy and Child Protection",
    "Confidentiality",
    "General conditions of sale",
    "General conditions of use",
    "Blog"
  ];

  return (
    <footer className="footer-container">
      <Button className="explore-button" type="primary">
        <Text className="explore-text">Explore Loly</Text>
        <div className="arrow-icon-wrapper">
          <ArrowUpOutlined className="arrow-icon" />
        </div>
      </Button>

      <div className="contact-list">
        {contactArr.map((item, index) => (
          <div key={index} className="contact-item">
            <Text className='chaild'>{item}</Text>
            <Button className="arrow-button" icon={<ArrowUpOutlined className='arrow-icon2' />} />
          </div>
        ))}
      </div>

      <div className="footer-images">
        <img src="./Assets/earth.webp" alt="Earth" className="earth-image" />
        <img src="./Assets/payMethods.png" alt="Payment Methods" className="payment-methods-image" />
      </div>
    </footer>
  );
};

export default Footer;
