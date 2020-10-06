import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddEvent from "../../InPages/AddEvent/AddEvent";
import VolunteerList from "../VolunteerList/VolunteerList";
import Logo from '../../../logos/Group 1329.png';
import './Admin.css';



function Admin() {
    return (
        <Router>
            <Container fluid >
                <Row >
                    <Col md={3} className="logo-container">
                        <img src={Logo} id="main-logo" alt="" />
                    </Col>
                    <Col md={9}>
                        <Switch>
                            <Route exact path="/admin/volunteerList">
                                <h3>Volunteer List</h3>
                            </Route>
                            <Route path="/admin/addEvent">
                                <h3>Add Event</h3>
                            </Route>
                        </Switch>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <ul>
                            <li>
                                <Link to="/admin/volunteerList">Volunteer List</Link>
                            </li>
                            <li>
                                <Link to="/admin/addEvent">Add Event</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={9} className="main-container">
                        <div>
                            <Switch>
                                <Route exact path="/admin/volunteerList">
                                    <div className="volunteer-route">
                                        <VolunteerList></VolunteerList>
                                    </div>
                                </Route>
                                <Route path="/admin/addEvent">
                                    <div>
                                        <AddEvent></AddEvent>
                                    </div>
                                </Route>
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
}

export default Admin;





