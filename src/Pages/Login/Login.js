import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaGoogle} from "react-icons/fa";

const Login = () => {

    const { register, handleSubmit } = useForm();

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl text-center font-bold'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password")} className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <Link className="label-text">Forget Password</Link>
                        </label>
                    </div>
                    <input className='btn btn-accent w-full' type="submit" value={'Login'} />
                    <p className='text-center'>Nwe to account? <Link className=' text-accent font-semibold' to={'/signIn'}>Create new account</Link></p>
                </form>
                <div className="divider">OR</div>
                <button className='btn btn-active btn-ghost w-full'><FaGoogle className='mr-3 text-3xl text-red-500'></FaGoogle>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;