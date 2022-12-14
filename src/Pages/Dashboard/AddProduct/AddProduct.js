import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';


const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['special'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:8000/categorySpecial`)
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = (`https://api.imgbb.com/1/upload?key=${imageHostKey}`)
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const product = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }

                    // save product information to the database
                    fetch(`http://localhost:8000/product`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added success`);
                            navigate('/dashboard/manageoders')
                        })
                }
            })


    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7 m-32 bg-red-300'>
            <h2 className='text-3xl font-bold'>Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
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
                        <span className="label-text">Specialty</span>
                    </label>
                    <select className="select textarea-secondary   select-ghost w-full max-w-xs" {...register('specialty')}>
                        <option>Special Product</option>
                        {
                            specialties?.map(specialty => <option
                                key={specialty._id}
                                value={specialty.title}
                            >{specialty.title}</option>)
                        }
                    </select>

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file" {...register("image", {
                        required: 'Photo is required'
                    })}
                        className="input input-bordered  textarea-primary w-full max-w-xs" />
                    {errors.img?.type === 'required' && <p className='text-red-600'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-active mt-8 btn-primary w-full' type="submit" value={'Add A Product'} />
            </form>
        </div>
    );
};

export default AddProduct;