import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaGoogle} from "react-icons/fa";

const Login = () => {

    const { register,formState: { errors },  handleSubmit } = useForm();

    const handleLogin = data => {
    console.log(data)
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
                            required:'Email is required'
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
                            minLength: {value:6, message:'password must be 6 characters'}
                        
                        })} className="input input-bordered w-full max-w-xs" />
                            {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                        <label className="label">
                            <Link className="label-text">Forget Password</Link>
                        </label>
                    </div>
                    <input className='btn btn-active btn-secondary w-full' type="submit" value={'Login'} />
                    <p className='text-center'>Nwe to account? <Link className=' text-accent font-semibold' to={'/signIn'}>Create new account</Link></p>
                </form>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'><FaGoogle className='mr-3 text-3xl text-red-500'></FaGoogle>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;