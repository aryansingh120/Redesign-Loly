// import React from 'react'
// import { Button, Image,Row,Col } from 'antd'
// import { MenuOutlined } from '@ant-design/icons';
// import './Navbar.css'


// const Navbar = () => {
//   let navItem=["Become a fan","Become a creator","Contact us"];
//   let btnItem=["login","Register"];

//   return (
//     <div className='main'>
//     <Col className="main1">
//       <img src='./Assets/logo_main.png' className='loly'/>
//     </Col>
//     <Col className='main2'>
//     <MenuOutlined style={{ fontSize: '24px', color: 'white' }} /> 
//      </Col>

//      <Col className='main3'>
//       {
//         navItem.map((item,index)=>{
//           return (
//     <Button type="text" className='child1'>{item}</Button>
//           )
//         })
//       }
//      </Col>
//      <Col className='main4'>
//      {
//       btnItem.map((item,index)=>{
//         return (
//           <Button type='link' shape='round' className='child2'>{item}</Button>
//         )
//       })
//      }

//      </Col>

//     </div>

    
   
    
//   )
// }

// export default Navbar








import React, { useState } from 'react';
import { Drawer, Button, Row, Col } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import './Navbar.css';

const Navbar = () => {
    const navItem = ["Become a fan", "Become a creator", "Contact us"];
    const btnItem = ["Login", "Register"];
    const navItem2 = [...navItem, ...btnItem];

    const [drawerVisible, setDrawerVisible] = useState(false);

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const closeDrawer = () => {
        setDrawerVisible(false);
    };

    return (
        <div className="navbar-container">
            <Row className="navbar" align="middle">
                {/* Logo */}
                <Col  className="logo-container">
                    <img src="./Assets/logo_main.png" alt="loly" className="logo" />
                </Col>

                {/* Desktop Menu */}
                <Col  className="desktop-menu">
                    {navItem.map((item, index) => (
                        <Button type="text" className="nav-item" key={index}>
                            {item}
                        </Button>
                    ))}
                </Col>

                {/* Desktop Buttons */}
                <Col  className="desktop-buttons">
                    {btnItem.map((item, index) => (
                        <Button
                            key={index}
                            type='default'
                            shape="round"
                            className={index === 0 ? "login-btn" : "register-btn"}
                        >
                            {item}
                        </Button>
                    ))}
                </Col>

                {/* Hamburger Menu for Mobile */}
                <Col className="mobile-menu-btn-container">
                    <Button type="text" className="mobile-menu-btn" onClick={showDrawer}>
                        <MenuOutlined className="menu-icon" />
                    </Button>
                </Col>
            </Row>

            {/* Mobile Drawer */}
            <Drawer
                placement="left"
                // onClose={closeDrawer}
                open={drawerVisible}
                width="100%"
                className="mobile-drawer"
                // closeIcon={<CloseOutlined className="close-icon" />}
            >
                <div className="mobile-menu-content">
                    <div className="mobile-header">
                        <img src="./Assets/logo_main.png" alt="loly" className="mobile-logo" />
                         closeIcon={<CloseOutlined className="close-icon"  onClick={closeDrawer}/>}

                    </div>
                    <div className="mobile-menu">
                        {navItem2.map((item, index) => (
                            <Button type="text" className="mobile-nav-item" key={index}>
                                {item}
                            </Button>
                        ))}
                    </div>
                </div>
            </Drawer>
        </div>
    );
};

export default Navbar;
