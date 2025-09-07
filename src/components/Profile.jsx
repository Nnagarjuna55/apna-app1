import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


const Profile = () => {
    const { user } = useContext(AuthContext);


    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            {user ? (
                <div>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    );
};


export default Profile;