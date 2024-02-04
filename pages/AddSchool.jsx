import { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddSchool = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [image, setImage] = useState(null);

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('address', data.address);
        formData.append('email', data.email);
        formData.append('image', image);

        fetch('/api/addSchool', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Handle success or display error messages
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <div>
            <h1>Add School</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name:</label>
                    <input {...register('name', { required: true })} />
                    {errors.name && <span>Name is required</span>}
                </div>
                <div>
                    <label>Address:</label>
                    <input {...register('address', { required: true })} />
                    {errors.address && <span>Address is required</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" {...register('email', { required: true })} />
                    {errors.email && <span>Email is required</span>}
                </div>
                <div>
                    <label>Image:</label>
                    <input type="file" onChange={handleImageChange} />
                </div>
                <button type="submit">Add School</button>
            </form>
        </div>
    );
};

export default AddSchool;
