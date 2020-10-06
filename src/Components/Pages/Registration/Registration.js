import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Registration.css';
import Logo from '../../../logos/Group 1329.png';
import { UserContext } from '../../../App';
import { useHistory, useParams } from 'react-router-dom';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';





const Registration = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { id } = useParams();
    const [events, setEvents] = useState({});
    const [selectedDate, setSelectedDate] = useState({
        date: new Date()
    });
    const history = useHistory();


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
        document.getElementById('fullName').value = loggedInUser.name;
        if (document.getElementById('fullName').value == "undefined") {
            document.getElementById('fullName').value = "";
        }
        document.getElementById('email').value = loggedInUser.email;
        if (document.getElementById('email').value == "undefined") {
            document.getElementById('email').value = "";
        }
        document.getElementById('taskName').value = events.title;
    }


    const handleRegistration = (e) => {

        const newRegi = { ...loggedInUser, ...selectedDate, ...events };
        fetch('https://afternoon-gorge-45045.herokuapp.com/addRegistration', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newRegi)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    history.push('/eventTasks');
                }
            });

        e.preventDefault();
    }






    return (
        <Container className="reg-container" id="reg-container">
            <img id="main-logo" src={Logo} alt="" />
            <div className="reg-box">
                <h3>Register as a Volunteer</h3>
                <br />
                <form className="reg-form" id="reg-form" onSubmit={handleRegistration}>
                    <input type="text" placeholder="Full Name" id="fullName" required />
                    <br />
                    <input type="text" placeholder="Username or Email" id="email" required />
                    <br />
                    <MuiPickersUtilsProvider utils={DateFnsUtils} >
                        <DatePicker
                            id="datePicker"
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
                    <input type="text" placeholder="Description" id="description" required />
                    <br />
                    <input type="text" placeholder="Organize books at the library." id="taskName" required />
                    <br />
                    <input type="submit" value="Registration" className="btn btn-primary submit-btn" />
                </form>
            </div>
        </Container>
    );
};

export default Registration;