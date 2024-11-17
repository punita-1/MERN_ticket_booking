import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Events.css'

function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch events from the backend or use mock data
        setEvents([
            { id: 1, name: 'Concert', date: '2024-11-01' },
            { id: 2, name: 'Movie Night', date: '2024-11-02' }
        ]);
    }, []);

    return (
        <div>
            <h2>Available Events</h2>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <Link to={`/booking/${event.id}`}>
                            {event.name} - {event.date}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Events;
