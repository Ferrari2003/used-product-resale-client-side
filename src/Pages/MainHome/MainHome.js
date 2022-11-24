import React from 'react';
import { Link } from 'react-router-dom';


const MainHome = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-red-200">
                <div className="hero-content flex-col">
                    <div className="form-control mt-6">
                        <Link to={'/home'} className="btn btn-primary bg-gradient-to-r from-violet-500 to-fuchsia-500">Home Page Is Open</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHome;