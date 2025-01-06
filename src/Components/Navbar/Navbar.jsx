import React from 'react'
import { Button, Image,Row,Col } from 'antd'
import { MenuOutlined } from '@ant-design/icons';
import './Navbar.css'


const Navbar = () => {
  let navItem=["Become a fan","Become a creator","Contact us"];
  let btnItem=["login","Register"];

  return (
    <div className='main'>
    <Col className="main1">
      <img src='./Assets/logo_main.png' className='loly'/>
    </Col>
    <Col className='main2'>
    <MenuOutlined style={{ fontSize: '24px', color: 'white' }} /> 
     </Col>

     <Col className='main3'>
      {
        navItem.map((item,index)=>{
          return (
    <Button type="text" className='child1'>{item}</Button>
          )
        })
      }
     </Col>
     <Col className='main4'>
     {
      btnItem.map((item,index)=>{
        return (
          <Button type='link' shape='round' className='child2'>{item}</Button>
        )
      })
     }

     </Col>

    </div>

    
   
    
  )
}

export default Navbar
