import  React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import { BsFacebook, BsLinkedin, BsTwitter, BsStackOverflow, BsGoogle, BsGithub, BsYoutube } from "react-icons/bs";

import './style.css';

const  ContactContainer = ()=>{

const myData = [
    
    {name:'Facebook', link:'https://www.facebook.com/raghvendrasingh.thakur.7/', text:'Follow to my facebook.'},
    {name:'Linkedin', link:'https://www.linkedin.com/in/raghevndra-singh-lodhi-52474a193/', text:'Follow to my linkedin.'},
    {name:'Email',link:'raghvendrathakur900@gmail.com',text:'Send the email.'},
    {name:'GitHub', link:'https://github.com/', text:'Follow to my github account.'},

]





    return (
        <div className='contactWrap'>
        <Container>
            <Row>
                <Col>
                    <p>CONNECT WITH US</p>
                    <h1>Get in Touch</h1>
                </Col>
            </Row>
            <Row>
                <Col className='conectIcon'>
                    <ul className='socialIconsList'>
                        <li>
                            <a rel="noreferrer" href="https://www.facebook.com/rohitazadmalik/" target="_blank">
                                <BsFacebook />
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://www.linkedin.com/in/rohitazad/" target="_blank">
                                <BsLinkedin />
                            </a>
                        </li>
                      
                     
                        <li>
                            <a rel="noreferrer" href="https://raghvendrathakur900@gmail.com/" target="_blank">
                                <BsGoogle />
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://github.com/" target="_blank">
                                <BsGithub />
                            </a>
                        </li>
                       
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup className='contactList'>
                        {
                            myData && myData.length > 0 ? myData.map((item)=>{
                                return (
                                    <ListGroup.Item key={item.name}>
                                        <span>{item.text}</span>
                                        <a href={item.link} rel="noreferrer"  target="_blank">
                                            {item.link}
                                        </a>
                                    </ListGroup.Item>
                                )
                            }) : ''
                        }
                        
                    </ListGroup>
                </Col>
            </Row>
        </Container>
        </div>
    )
}



































export default ContactContainer






