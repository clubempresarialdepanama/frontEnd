import React from 'react'
import logo from './logo.png'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarContainer.css'

 const NavbarContainer= ({
    isUserLogin,
    changeUserStatus,
    setServiceView
})=> {
    //NOTE provitional  change this button after signup and log in component is created
   const changeUserStatusHandler = (val)=> changeUserStatus(val)
   const setServiceHandler =(val)=> setServiceView(val)
        
   

        return (

            <div>
                <Navbar className="navbar-custom" expand="lg">
                    <Navbar.Brand size="lg"  ><img  className="navBar--logo" src={logo} alt="Smiley face"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto navBar-">
                            <Nav.Link href="#home">INICIO</Nav.Link>
                            <Nav.Link href="#home">CLUB</Nav.Link>
                            <NavDropdown  title="SERVICIOS" id="basic-nav-dropdown">
                               <NavDropdown.Item size="sm">  <div onClick={()=>setServiceHandler(1)}>Servicio 1</div></NavDropdown.Item>
                                <NavDropdown.Item size="sm">  <div onClick={()=>setServiceHandler(2)}>Servicio 2</div></NavDropdown.Item>
                                <NavDropdown.Item  size="sm">  <div onClick={()=>setServiceHandler(3)}>Servicio 3</div></NavDropdown.Item>
                            </NavDropdown>
                            {isUserLogin ?
                             <Button 
                             className="button-custom"
                             size="sm"   
                             onClick={()=>changeUserStatusHandler(!isUserLogin)}>
                                CERRAR SECION
                            </Button> :
                            <Button
                            className="button-custom"
                             size="sm" 
                             onClick={()=>changeUserStatusHandler(!isUserLogin)}>
                            REGISTRO / INICIO SECION
                            </Button>
                            }
    
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
                <div></div>
            </div>
        )
    
}
export default NavbarContainer
