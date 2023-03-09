import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const HeaderComponent = ()=>{
const navData = [
{name:'Home', link:'/Home'},
{name:'Movies', link:'/movies'},
{name:'Tv Series', link:'/series'},
{name:'Search', link:'/search'},
{name:'Contact Us', link:'/contact'},
{name: 'About Us', link: '/about'}
]

return (
<header  className='header'>
<Navbar bg="dark" expand="lg" className="text-decoration-none">

<Container>
<img src='https://cdn.freelogodesign.org/files/98598950b8bd41608c052084cb812661/thumb/logo_200x200.png?v=0'alt='1'/>

<Navbar.Brand>Movie Entertainment

{/* <img src='https://cdn.freelogodesign.org/files/98598950b8bd41608c052084cb812661/thumb/logo_200x200.png?v=0'alt='1'/> */}

</Navbar.Brand>
<Navbar.Toggle aria-controls="navbarScroll" />
<Navbar.Collapse id="navbarScroll">
<Nav className="me-auto my-2 my-lg-0"  style={{ maxHeight: '100px' }}
navbarScroll >
{
navData.map((item)=>{
return (
<Nav key={item.name}>
<Link to={item.link}>{item.name}</Link>
</Nav> 
)
})
}
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>

</header>
)
}

export default HeaderComponent;