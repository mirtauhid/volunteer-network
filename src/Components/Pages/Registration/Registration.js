import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Registration.css';
import Logo from '../../../logos/Group 1329.png';
import { UserContext } from '../../../App';
import { useParams } from 'react-router-dom';
import { DatePicker, KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Grid } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';


const Registration = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { id } = useParams();
    const [events, setEvents] = useState({});
    const [selectedDate, setSelectedDate] = useState({
        date: new Date()
    });


    const handleEventDate = (date) => {
        const newDates = { ...selectedDate }
        newDates.date = date;
        setSelectedDate(newDates);
    };


    const url = "https://www.json-generator.com/api/json/get/cgfBRhPdDS?indent=2";
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const singleEvent = data.map(singleData => singleData);
                const eventInfo = singleEvent.find(data => data.id == id);
                console.log(eventInfo);
                setEvents(eventInfo);

            })
    }, [])

    if (document.getElementById('reg-container') && document.getElementById('reg-form')) {
        const fullName = document.getElementById('fullName');
        fullName.value = loggedInUser.name;
        const email = document.getElementById('email');
        email.value = loggedInUser.email;
        document.getElementById('taskName').value = events.title;
    }


    const handleRegistration = () => {
        const newRegi = { ...loggedInUser, ...selectedDate };
        fetch('http://localhost:5000/addRegistration', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newRegi)
        })
            .then(res => res.json())
            .then(data => { console.log(data) });
    }



    return (
        <Container className="reg-container" id="reg-container">
            <img id="main-logo" src={Logo} alt="" />
            <div className="reg-box">
                <h3>Register as a Volunteer</h3>
                <br />
                <form className="reg-form" id="reg-form" onSubmit={handleRegistration}>
                    <input type="text" placeholder="Full Name" id="fullName" />
                    <br />
                    <input type="text" placeholder="Username or Email" id="email" />
                    <br />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            disableToolbar
                            InputProps={{
                                disableUnderline: true,
                            }}
                            variant="inline"
                            format="dd/MM/yyyy"
                            id="date-picker-inline"
                            value={selectedDate.date}
                            onChange={handleEventDate}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    <br />
                    <input type="text" placeholder="Description" />
                    <br />
                    <input type="text" placeholder="Organize books at the library." id="taskName" />
                    <br />
                    <input type="submit" value="Registration" className="btn btn-primary submit-btn" />
                </form>
            </div>
        </Container>
    );
};

export default Registration;