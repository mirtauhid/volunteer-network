import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './EventCard.css';

const EventCard = (props) => {
    const { title, url, id } = props.singleData;

    const history = useHistory()
    const eventBook = (id) => {
        history.push(`/login/${id}`);
    }




    return (
        <div className="card-container" >
            <Card id="card" as={Link} onClick={() => eventBook(id)} style={{ width: '270px', margin: '20px 7px', borderRadius: '10px', overflow: 'hidden', textDecoration: 'none' }}>
                <Card.Img variant="top" src={url} />
                <Card.Body id="card-body" style={{ backgroundColor: "#17A2B8" }} >
                    <Card.Title style={{ fontSize: '13px', color: 'white' }}>{title}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default EventCard;