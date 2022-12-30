import React from 'react';
import profile from '../../../assets/profile.jpg';
const Profile = () => {
    return (
        <div>
            <div className="card w-2/4 h-2/6 bg-slate-100 mt-5 m-auto shadow-xl rounded">
                <img src={profile} className='w-full' alt="Shoes" />
            </div>
        </div>
    );
};

export default Profile;