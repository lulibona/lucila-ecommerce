import React from 'react';
import "./navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from '../CartWidget/Cartwidget';
import { Link, NavLink } from 'react-router-dom';


export const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Link to='/'>
                    <Navbar.Brand className="brand-name">Nébula</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to={`/nosotros`} className="menu_link"> Nosotros </Link>
                        <Link to={`/category/indumentaria`} className="menu_link"> Indumentaria </Link>
                        <Link to={`/category/calzado`} className="menu_link"> Calzado </Link>
                        <Link to={`/category/accesorios`} className="menu_link"> Accesorios </Link>
                        <Link to={`/contacto`} className="menu_link"> Contacto </Link>

                        {/* <NavLink to={`/nosotros`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> Nosotros </NavLink>
                        <NavLink to={`/category/indumentaria`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> Indumentaria</NavLink>
                        <NavLink to={`/category/calzado`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} > Calzado </NavLink>
                        <NavLink to={`/category/accesorios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} > Accesorios </NavLink>
                        <NavLink to={`/contacto`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} > Contacto</NavLink> */}

                    </Nav>
                    </Navbar.Collapse>
                    <CartWidget/>
                </Container>
                
            </Navbar>

        </div>
    )
}