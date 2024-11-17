// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaBus, FaSubway, FaHotel, FaTaxi, FaTrain, FaPlane } from 'react-icons/fa';
// import { FaCalendarAlt } from 'react-icons/fa';
// import './Home.css'

// function Home() {
//     return (
//         <div>
//             {/* Hero Panel */}
//             <div className="hero-panel">
//                 <div className="hero-item">
//                     <Link to="/trains" className="hero-link">
//                         <div className="hero-card">
//                             <FaTrain size={24} />
//                             <h3>Trains</h3>
//                         </div>
//                     </Link>
//                 </div>
//                 <div className="hero-item">
//                     <Link to="/buses" className="hero-link">
//                         <div className="hero-card">
//                             <FaBus size={24} />
//                             <h3>Buses</h3>
//                         </div>
//                     </Link>
//                 </div>
//                 <div className="hero-item">
//                     <Link to="/flights" className="hero-link">
//                         <div className="hero-card">
//                             <FaPlane size={24} />
//                             <h3>Flights</h3>
//                         </div>
//                     </Link>
//                 </div>
//                 <div className="hero-item">
//                     <Link to="/hotels" className="hero-link">
//                         <div className="hero-card">
//                             <FaHotel size={24} />
//                             <h3>Hotels</h3>
//                         </div>
//                     </Link>
//                 </div>
//                 <div className="hero-item">
//                     <Link to="/events" className="hero-link">
//                         <div className="hero-card">
//                             <FaCalendarAlt size={24} />
//                             <h3>Events</h3>
//                         </div>
//                     </Link>
//                 </div>
//                 <div className="hero-item">
//                     <Link to="/cab" className="hero-link">
//                         <div className="hero-card">
//                             <FaTaxi size={24} />
//                             <h3>Cab</h3>
//                         </div>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaBus, FaSubway, FaHotel, FaTaxi, FaTrain, FaPlane } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import TrainAvailability from '../components/TrainAvailability';
import './Home.css';
import TrainJourneyDetails from '../components/TrainAvailability';

function Home() {
    return (
        <div>
            {/* Hero Panel */}
            <div className="hero-panel">
                <div className="hero-item">
                    <Link to="/booking/train" className="hero-link">
                        <div className="hero-card">
                            <FaTrain size={24} />
                            <h3>Trains</h3>
                        </div>
                    </Link>
                </div>
                <div className="hero-item">
                    <Link to="/booking/bus" className="hero-link">
                        <div className="hero-card">
                            <FaBus size={24} />
                            <h3>Buses</h3>
                        </div>
                    </Link>
                </div>
                <div className="hero-item">
                    <Link to="/booking/flight" className="hero-link">
                        <div className="hero-card">
                            <FaPlane size={24} />
                            <h3>Flights</h3>
                        </div>
                    </Link>
                </div>
                <div className="hero-item">
                    <Link to="/booking/hotel" className="hero-link">
                        <div className="hero-card">
                            <FaHotel size={24} />
                            <h3>Hotels</h3>
                        </div>
                    </Link>
                </div>
                <div className="hero-item">
                    <Link to="/booking/event" className="hero-link">
                        <div className="hero-card">
                            <FaCalendarAlt size={24} />
                            <h3>Events</h3>
                        </div>
                    </Link>
                </div>
                <div className="hero-item">
                    <Link to="/booking/cab" className="hero-link">
                        <div className="hero-card">
                            <FaTaxi size={24} />
                            <h3>Cab</h3>
                        </div>
                    </Link>
                </div>
            </div>
            <div>
                {/* <TrainAvailability />  */}
                <TrainJourneyDetails />
            </div>
        </div>

    );
}

export default Home;
