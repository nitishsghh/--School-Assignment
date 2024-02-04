import { useForm } from 'react-hook-form';

const SchoolForm = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
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
                <input type="file" {...register('image', { required: true })} />
                {errors.image && <span>Image is required</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default SchoolForm;
