import { FC } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

type TFormData = {
  email: string;
  password: string;
};
export const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    console.log(data as TFormData);
    // Handle login logic here (e.g., API call)
  };
  return (
    <div className="container mx-auto h-full">
      <div className="w-full h-full flex flex-col items-center justify-center ">
        <form onSubmit={handleSubmit(onSubmit)} className="w-[350px]">
          <h1 className="h1 font-bold mb-12">Sign In</h1>
          <div className="flex flex-col gap-4">
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

            <button className="common-button" type="submit">
              Login
            </button>
          </div>
        </form>

        <div className="mt-32"></div>
      </div>
    </div>
  );
};
