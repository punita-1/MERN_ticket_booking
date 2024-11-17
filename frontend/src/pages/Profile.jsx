import React, { useState } from 'react';

function Profile() {
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('john@example.com');

    const handleUpdate = (e) => {
        e.preventDefault();
        // Update profile details in backend
    };

    return (
        <div>
            <h2>Profile</h2>
            <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
}

export default Profile;
