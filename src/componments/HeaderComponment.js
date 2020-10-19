import React,{Component, useContext, useState,useHistory} from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,Button,FormControl, Alert } from 'react-bootstrap';
import {UserContext} from './userContext'


function Header (props){
  const [userLogin,setLogin] = useContext(UserContext);
  function logoutUser () {
    alert();
    
    localStorage.removeItem("userID");
        setLogin(false)
    window.location = "/signInUserComponment";
  }
 
  
 
 
  
  console.log(userLogin);

 
  //  constructor(props){
  //    super(props)
  //    this.state = {
  //     src :"https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg",
  //     style:{
  //       width: '40px',
  //     height: '40px'
  //     },
    
  //    }
    
  
  // const [checkUserLogin] = useState(props.userLogin)
  const src = "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg";
  const style = {
    width: '40px',
    height: '40px'
  };
  
    return(
        <div className="header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as ={Link} to="/registerUserComponment">Register User</Nav.Link>
      <Nav.Link as ={Link} to ="headerComponent">Pricing</Nav.Link>
      <NavDropdown title="Test" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      
    </Nav>
    <Nav>
    <div>
    {/* {userLogin} */}
      </div>
    {
     
      
    
     userLogin ? (
     
    <React.Fragment>
       <NavDropdown title={
                    <a  className="pull-left">
                        <img style={style}  className="thumbnail-image rounded-circle" 
                            src={src}
                            alt="user pic"
                        />

                      
                    </a>
                } id="collasible-nav-dropdown">
      
        <NavDropdown.Item as ={Link} to={`/editUserComponment/${localStorage.getItem('userID')}`} >Edit Profile</NavDropdown.Item>
        <NavDropdown.Item onClick = {logoutUser}>Log Out</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#deets">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Nav.Link>
     
    </React.Fragment>
    
) : (
  <React.Fragment>
      <Nav.Link as ={Link} to="/signInUserComponment">Sign In</Nav.Link>
      <Nav.Link as ={Link} to ="registerUserComponment">Sign Up</Nav.Link>
     
      </React.Fragment>
)
}
</Nav>
  </Navbar.Collapse>
</Navbar>

        </div>
    )
  
}
export default Header