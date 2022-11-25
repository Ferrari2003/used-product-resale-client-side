import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {signUp,googleSign  } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');



    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signUp(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error =>{
            console.log(error.message);
            setLoginError(error.message)
        }) 
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
                <h2 className='text-3xl text-center font-bold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {
                            required: 'Email is required'
                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email?.type === 'required' && <p className='text-red-600'>Email is required</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: 'Password is required',
                         

                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                        <label className="label">
                            <Link className="label-text">Forget Password</Link>
                        </label>
                    </div>
                    <input className='btn btn-active btn-secondary w-full' type="submit" value={'Login'} />
                    <p className='text-center'>Nwe to account? <Link className=' text-accent font-semibold' to={'/signIn'}>Create new account</Link></p>
                 <div>
                    {loginError && <p className='text-red-500'>{loginError}</p>}
                 </div>
                </form>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full'><FaGoogle className='mr-3 text-3xl text-red-500'></FaGoogle>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;