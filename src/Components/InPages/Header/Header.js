import React from 'react';
import { Button, Col, Container, Form, FormControl, Nav, Row } from 'react-bootstrap';
import './Header.css';
import Logo from '../../../logos/Group 1329.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container fluid className="header-container" >
            <Row fluid="md" className="header-top" >
                <Col md={4}>
                    <img id="main-logo" src={Logo} alt="" />
                </Col>
                <Col md={8} className="nav-bar justify-content-end">
                    <Nav  as="ul">
                        <Nav.Item as="li">
                            <Nav.Link to="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link to="/home">Donation</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link to="/home">Events</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link to="/home">Blog</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Button variant="primary" style={{ margin: "0px 15px 0px 15px" }}  as={Link} to="/registration" >Register</Button>
                    <Button  as={Link} to="/admin" variant="dark">Admin</Button>
                </Col>
            </Row>
            <div className="search-box">
                <h2>I grow by helping people in need.</h2>
                <Form inline>
                    <FormControl type="text" placeholder="Search...." className=" mr-sm-2" />
                    <Button type="submit" variant="primary" id="btnSearch" >Submit</Button>
                </Form>
            </div>
        </Container>
    );
};

export default Header;