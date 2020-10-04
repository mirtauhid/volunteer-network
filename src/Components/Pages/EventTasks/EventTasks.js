import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import './EventTasks.css';
import MainLogo from '../../../logos/Group 1329.png';

const EventTasks = () => {
    return (
        <Container className="eventTasks-container">
            <Row id="eventTasks-box">
                <Col md={4}>
                    <img id="logo" src={MainLogo} alt=""/>
                </Col>
                <Col md={8}>
                    <Nav className="nav justify-content-end">
                        <Nav.Item>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/">Donation</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/">Events</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/">Blog</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/" style={{fontWeight: 'bold'}} >Sufi Ahmed</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
};

export default EventTasks;