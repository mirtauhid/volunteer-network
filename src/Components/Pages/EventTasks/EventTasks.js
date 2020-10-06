import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import './EventTasks.css';
import MainLogo from '../../../logos/Group 1329.png';
import { UserContext } from '../../../App';
import { Button } from '@material-ui/core';

const EventTasks = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selfEvents, setSelfEvents] = useState([]);


    useEffect(() => {
        fetch('https://afternoon-gorge-45045.herokuapp.com/registrations?email=' + loggedInUser.email, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setSelfEvents(data);
            })

    }, [selfEvents])

    const deleteEvent = (id) => {
        fetch(`https://afternoon-gorge-45045.herokuapp.com/registrations/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log("deleted successfully")
            })
    }



    return (
        <Container className="eventTasks-container">
            <Row id="eventTasks-box">
                <Col md={4}>
                    <img id="logo" src={MainLogo} alt="" />
                </Col>
                <Col md={8}>
                    <Nav className="nav justify-content-end">
                        <Nav.Item>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/volunteerList">Donation</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/">Events</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/">Blog</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/" style={{ fontWeight: 'bold' }} >{loggedInUser.email}</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
            <Container style={{display: 'flex', flexWrap: "wrap"}}>
                {
                    selfEvents.map(reg =>
                        <div className="d-flex justify-content-between" style={{ height: '200px !important', maxWidth: '490px', width: '490px ', background: 'white', display: 'flex', margin: '30px', borderRadius: '10px' }}>
                            <div style={{ padding: '20px' }}>
                                <img style={{ height: '160px', width: '180px', borderRadius: '10px' }} src={reg.url} alt="" />
                            </div>
                            <div style={{ margin: '15px' }}>
                                <p><strong>{reg.title}</strong></p>
                                <p><small><strong>{(new Date(reg.date).toDateString('dd/MM/yyyy'))}</strong></small></p>
                                <Button variant="danger" style={{ float: 'right', marginTop: '50px', background: '#DC3545 !important' }} onClick={() => deleteEvent(reg._id)} >Cancel</Button>
                            </div>
                        </div>
                    )
                }
            </Container>
        </Container>
    );
};

export default EventTasks;