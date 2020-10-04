import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import EventCard from '../../InPages/EventCard/EventCard';
import Header from '../../InPages/Header/Header';
import './Home.css'

const Home = () => {
    const [cardData, setCardData] = useState([]);
    const url = "https://www.json-generator.com/api/json/get/cgfBRhPdDS?indent=2";
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCardData(data);
            })
    }, [])

    return (
        <Container fluid id="home-container">
            <Container>
                <Header></Header>
                <Row>
                    {
                        cardData.map((singleData, key) => <EventCard key={key} singleData={singleData}></EventCard>)
                    }
                </Row>
            </Container>
        </Container>
    );
};

export default Home;    