import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'; // header css 

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        // navbar start here 
        <Navbar bg="warning" variant="light" className="p-4" expand="md">
            <Container className="d-flex justify-content-between">
                <Container>

                    {/* website title main  */}
                    <Navbar.Brand href="/home" className="header-title fs-2 text-white">HELEX DELIVERY</Navbar.Brand>
                </Container>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="d-md-flex justify-content-md-end">
                        {/* Website main manu  */}
                        <Nav className="d-flex justify-content-end">
                            <Nav.Link>
                                <NavLink to="/home" className="btn" activeClassName="btn-light">Home</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to="/about" className="btn" activeClassName="btn-light">About</NavLink>
                            </Nav.Link>




                            <Nav.Link>
                                {user.email && <NavLink to="/myorders" className="btn" activeClassName="btn-light">My Order</NavLink>}
                            </Nav.Link>

                            <Nav.Link>
                                {user.email && <NavLink to="/manageorders" className="btn" activeClassName="btn-light">Manage all Order</NavLink>}
                            </Nav.Link>

                            <Nav.Link>
                                {user.email && <NavLink to="/addservices" className="btn" activeClassName="btn-light">Add Services</NavLink>}
                            </Nav.Link>


                            <Nav.Link>
                                {user.email && <span style={{ color: 'white' }}>Hello {user.displayName} </span>}
                                {user.email ? <Button onClick={logOut} className="btn btn-light">Log Out</Button> : <NavLink to="/login" className="btn" activeClassName="btn-light">Login</NavLink>}
                            </Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Container>
        </Navbar>
    );
};

export default Header;