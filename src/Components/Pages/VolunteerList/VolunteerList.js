import React, { useEffect, useState } from 'react';

const VolunteerList = () => {
    const [registrations, setRegistrations] = useState([]);
    const url = "https://localhost:5000/registrations";
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setRegistrations(data);
                console.log(data);
            })
    }, [])

    function deleteEvent(id) {
        console.log('delete');

        fetch(`http://localhost:5000/registrations/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log("deleted successfully")
            })
    }



    return (
        <div>
            {
                registrations.map(reg => <li className="d-flex justify-content-between" style={{padding: '10px', listStyle: 'none' }}>{reg.name} <span> | </span> {reg.email} <span> | </span> {reg.title} <span> | </span> {(new Date(reg.date).toDateString('dd/MM/yyyy'))} <span> | </span> <button onClick={() => deleteEvent(reg._id)} >Delete</button> </li>)
            }
        </div>
    );
};

export default VolunteerList;