import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const DisplayError = () => {
    const {logOut} = useContext(AuthContext)
    const error = useRouteError();

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }


    return (
        <div>
            <p className='text-red-500'>Something wrong..!</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h2 className='text-3xl'>please <button onClick={handleSignOut}>Sing out</button>and log back</h2>
        </div>
    );
};

export default DisplayError;