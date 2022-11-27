import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import userToken from '../../hooks/useHooks';



const SignIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;


    const { createUser, googleSign, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');

    const [createUserEmail, setCreateUSerEmail] = useState('')
    const [token] = userToken(createUserEmail)
    const navigate = useNavigate();

   if(token){
    navigate('/');
   }

    const handleSignUp = (data) => {
        setSignUpError('');
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                }
            })

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created success')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { }) 
                    .catch(error => console.log(error))
                   saveUser(data.name, data.email);
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            })
    }

    const saveUser =(name, email) => {
        const user ={name,email}
        fetch('http://localhost:8000/users',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            setCreateUSerEmail(email)
            navigate('/');
        })

        
    }

    const handleGoogleLogin = () => {
        googleSign()
            .then(result => {
                const user = result.user
                console.log(user);
                navigate('/');
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
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="file" {...register("image", {
                            required: 'Photo is required',


                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.img?.type === 'required' && <p className='text-red-600'>{errors.img.message}</p>}
                    </div>

                    <input className='btn btn-active mt-8 btn-primary w-full' type="submit" value={'Create an account'} />
                    <p className='text-center'>Already have an account? <Link className=' text-accent font-semibold' to={'/login'}>Please Login</Link></p>
                    <div>
                        {signUpError && <p className='text-red-500'>{signUpError}</p>}
                    </div>
                </form>

                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full'><FaGoogle className='mr-3 text-3xl text-green-500'></FaGoogle>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignIn;