// import React, { useState, useEffect } from 'react';
// import { Typography, Button, Row, Col } from 'antd';
// import './Header2.css';

// const { Title, Paragraph } = Typography;

// const Header2 = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <Row className={`header ${isVisible ? 'visible' : ''}`} align="middle">
//       <Col xs={{ order: 2, span: 24 }} md={{ order: 1, span: 12 }} className="video-container">
//         <video src="https://loly.app/wp-content/uploads/2024/08/87477119-7334-46d1-bbb3-46e7e2bc5007.mp4" autoPlay loop muted />
//       </Col>
//       <Col xs={{ order: 1, span: 24 }} md={{ order: 2, span: 12 }} className="content-container">
//         <Title className="main-title">it's simple, it's better.</Title>
//         <Paragraph className="description">
//           Loly is a social network that allows creators to monetize their content with the best possible conversion
//         </Paragraph>
//         <Paragraph className="description">
//           Loli was developed by content creator, for content creators. Better experience for fans, better conversions for creators. Try and earn +.
//         </Paragraph>
//         <Button className="cta-button" size="large">
//           Open the application
//         </Button>
//       </Col>
//     </Row>
//   );
// };

// export default Header2;













import React, { useState, useEffect } from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const { Title, Paragraph } = Typography;

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="header"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
        >
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} md={12} order={[2, 2, 1, 1]}>
              <motion.div className="video-container" variants={itemVariants}>
                <video
                  src="https://loly.app/wp-content/uploads/2024/08/87477119-7334-46d1-bbb3-46e7e2bc5007.mp4"
                  type="video/mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </motion.div>
            </Col>
            <Col xs={24} md={12} order={[1, 1, 2, 2]}>
              <div className="content">
                <motion.div variants={itemVariants}>
                  <Title level={1} className="main-title">
                    It's simple, it's better.
                  </Title>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Paragraph className="description">
                    Loly is a social network that allows creators to monetize their content with the best possible conversion
                  </Paragraph>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Paragraph className="description">
                    Loli was developed by content creator, for content creators. Better experience for fans, better conversions for creators. Try and earn +.
                  </Paragraph>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Button type="primary" size="large" className="cta-button">
                    Open the application
                  </Button>
                </motion.div>
              </div>
            </Col>
          </Row>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Header;







