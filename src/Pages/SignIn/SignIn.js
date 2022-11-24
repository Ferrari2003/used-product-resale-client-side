import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';



const SignIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser,googleSign } = useContext(AuthContext);

    const handleSignUp = (data )=> {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))
    }

    const handleGoogleLogin = () => {
        googleSign()
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => {
            console.log(error)
        })
    }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl text-center font-bold'>Create an Account</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", {
                            required: 'Name is required'
                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name?.type === 'required' && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {
                            required: 'Email is required'
                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email?.type === 'required' && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'password mush be 6 character' }

                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password?.type === 'required' && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>

                    <input className='btn btn-active mt-8 btn-primary w-full' type="submit" value={'Create an account'} />
                    <p className='text-center'>Already have an account? <Link className=' text-accent font-semibold' to={'/login'}>Please Login</Link></p>
                </form>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full'><FaGoogle className='mr-3 text-3xl text-green-500'></FaGoogle>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignIn;