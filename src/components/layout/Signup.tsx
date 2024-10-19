import { FC } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

type TFormData = {
  name: string;
  email: string;
  pasword: string;
  confirmPassword: string;
};
export const Signup: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    console.log(data as TFormData);
    // Handle signup logic here (e.g., API call)
  };

  return (
    <div className="container mx-auto h-full">
      <div className="w-full h-full flex flex-col items-center justify-center ">
        <form onSubmit={handleSubmit(onSubmit)} className="w-[350px]">
          <h1 className="h1 font-bold mb-12">Create Account</h1>
          <div className="flex flex-col gap-4">
            <input
              className="common-input"
              type="text"
              id="name"
              placeholder="Full Name"
              {...register('name', { required: 'Full Name is required' })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message as string}</p>
            )}

            <input
              className="common-input"
              type="email"
              placeholder="Email Id"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Invalid email format',
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message as string}</p>
            )}

            <input
              className="common-input"
              type="password"
              placeholder="Password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && (
              <p className="text-red-500">
                {errors.password.message as string}
              </p>
            )}

            <input
              className="common-input"
              type="password"
              placeholder="Confirm Password"
              {...register('confirmPassword', {
                required: 'Confirm Password is required',
                validate: value => {
                  const { password } = getValues(); // Accessing password value correctly
                  return password === value || 'Passwords do not match';
                },
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">
                {errors.confirmPassword.message as string}
              </p>
            )}

            <button className="common-button" type="submit">
              Create Account
            </button>
          </div>

          <a href="/auth/login" className="flex w-full justify-end mt-2 ">
            <span>
              Have an Account?{' '}
              <span className="text-primary-purple font-bold hover:cursor-pointer">
                Sign In
              </span>
            </span>
          </a>
        </form>
        <div className="w-[500px] h-[4px] bg-primary-purple mt-12"></div>
        <div className="mt-32"></div>
      </div>
    </div>
  );
};
