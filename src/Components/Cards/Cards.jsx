import React from 'react';
import { Typography, Card, Button, Row, Col } from 'antd';
import './Cards.css';

const { Title, Paragraph } = Typography;

const Cards = () => {
    const cardArr = [
        {
            head: "How to become a creator?",
            point1: "Creating a creator account is quick, free, and easy to use! In just a few minutes, you can get a verified profile and start offering exclusive content to your fans.",
            point2: "Get started now!",
            btntext: "Register as a creator"
        },
        {
            head: "Who can register on Loly?",
            point1: "To register as a user:",
            btntext: "Register",
            point2: "- You must be at least 18 years old;",
            point3: "- You must have a valid email;",
            point4: "- You must be authorized by the laws of your country to join Loly, view the content and use its features."
        },
        {
            head: "How to earn money with Loly?",
            point1: "Start by creating a creator account and personalizing it. Provide the necessary information and register your bank account.",
            point2: "Then start sharing content and sharing your profile to get traffic.",
            btntext: "Go to Loly"
        },
        {
            head: "How does Loly protect the content broadcast?",
            point1: "Our team acts quickly to remove reported content:",
            btntext: "Go to Loly",
            point2: "- Loly reviews your request and removes the content quickly.",
            point3: "- Offending users may be sanctioned and their account blocked",
            point4: "- Loly may also take legal action.",
            point5: "- A watermark is displayed to discourage fans from sharing the content."
        },
        {
            head: "How do I withdraw my money from Loly?",
            point1: "To withdraw your money on Loly, log in and go to Payout Method in the settings. Select your preferred payment method and the time between your payments. The funds will be transferred to your bank account within 5 business days. Make sure your information is up to date to avoid any A delays in the transfer of your funds.",
            btntext: "Go to Loly"
        }
    ];

    return (
        <div className="cards2-container">
            <Title level={2} className="cards2-title">If you have any questions</Title>
            <Row gutter={[16, 16]}>
                {cardArr.map((item, index) => (
                    <Col key={index} xs={24} md={index > 2 ? 12 : 8}>
                        <Card className="cards2-card">
                            <Title level={3} className="cards2-card-title">{item.head}</Title>
                            <Paragraph className="cards2-card-text">{item.point1}</Paragraph>
                            {item.point2 && <Paragraph className="cards2-card-text">{item.point2}</Paragraph>}
                            {item.point3 && <Paragraph className="cards2-card-text">{item.point3}</Paragraph>}
                            {item.point4 && <Paragraph className="cards2-card-text">{item.point4}</Paragraph>}
                            {item.point5 && <Paragraph className="cards2-card-text">{item.point5}</Paragraph>}
                            <Button className="cards2-button">{item.btntext}</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Cards;
