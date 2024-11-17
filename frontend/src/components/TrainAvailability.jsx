import React, { useState } from 'react';
import axios from 'axios';

function TrainJourneyDetails() {
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [trainList, setTrainList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Station codes list for dropdown
    const stations = [
        { code: 'NDLS', name: 'New Delhi' },
        { code: 'HWH', name: 'Howrah' },
        { code: 'BCT', name: 'Bandra Terminus' },
        { code: 'MAS', name: 'Chennai' },
        { code: 'CST', name: 'Mumbai CST' },
        { code: 'PUNE', name: 'Pune' },
        // Add more stations as needed
    ];

    // API headers for RapidAPI
    const headers = {
        'x-rapidapi-host': 'trainjourney-irctc-api.p.rapidapi.com',
        'x-rapidapi-key': 'd85eb565a4msh08b788aaccc3bcfp145a14jsne0ff22851c39'
    };

    // Handle search for trains
    const searchTrains = () => {
        if (!source || !destination) {
            setError('Please select both source and destination.');
            return;
        }

        setLoading(true);
        setError(null);

        axios.get('https://trainjourney-irctc-api.p.rapidapi.com/api/train/train', {
            headers: headers,
            params: {
                search: source,  // Source station code (e.g., 'NDLS' for New Delhi)
                destination: destination,  // Destination station code (e.g., 'HWH' for Howrah)
                apikey: '5eb5f408',
                Disclaimer: 'This train running information is not affiliated with or endorsed by Indian Railways or IRCTC.'
            }
        })
            .then(response => {
                if (response.data.trains && response.data.trains.length > 0) {
                    setTrainList(response.data.trains);  // Populate train list
                } else {
                    setError('No trains found for the selected route.');
                }
                setLoading(false);
            })
            .catch(() => {
                setError('Failed to fetch train data');
                setLoading(false);
            });
    };

    return (
        <div>
            <h2>Train Availability</h2>

            {/* Dropdown for source station */}
            <div>
                <label htmlFor="source">Source Station: </label>
                <select
                    id="source"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                >
                    <option value="">Select Source Station</option>
                    {stations.map((station) => (
                        <option key={station.code} value={station.code}>
                            {station.name} ({station.code})
                        </option>
                    ))}
                </select>
            </div>

            {/* Dropdown for destination station */}
            <div>
                <label htmlFor="destination">Destination Station: </label>
                <select
                    id="destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                >
                    <option value="">Select Destination Station</option>
                    {stations.map((station) => (
                        <option key={station.code} value={station.code}>
                            {station.name} ({station.code})
                        </option>
                    ))}
                </select>
            </div>

            {/* Button to search for trains */}
            <button onClick={searchTrains}>Search Trains</button>

            {/* Loading and error handling */}
            {loading && <p>Loading available trains...</p>}
            {error && <p>{error}</p>}

            {/* Display list of available trains */}
            {trainList.length > 0 ? (
                <ul>
                    {trainList.map((train, index) => (
                        <li key={index}>
                            <h3>{train.train_name} ({train.train_number})</h3>
                            <p><strong>Status:</strong> {train.status}</p>
                            <p><strong>Departure Time:</strong> {train.departure_time}</p>
                            <p><strong>Arrival Time:</strong> {train.arrival_time}</p>
                            <p><strong>Source Station:</strong> {train.source_station}</p>
                            <p><strong>Destination Station:</strong> {train.destination_station}</p>
                            <button>Book Now</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No available trains found for the selected route.</p>
            )}
        </div>
    );
}

export default TrainJourneyDetails;
