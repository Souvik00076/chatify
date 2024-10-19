import { FC } from 'react';
export const VerifyEmail: FC = () => {
  return (
    <div className="h-screen w-screen app-bg-container flex flex-col items-center justify-center">
      <div className="bg-white py-4 px-10 w-[450px] h-[400px]">
        <div className="mt-8">
          <h1 className="h1 font-bold mt-2">Verify Email</h1>
          <h3 className="h3 mt-2">
            Enter the code we sent you on your mail. If you didn't get the code{' '}
            <span className="text-primary-purple hover:cursor-pointer">
              Click Here to resend
            </span>
            .
          </h3>
          <form className="flex flex-col gap-6 mt-8">
            <input
              type="text"
              className="common-input text-lg"
              placeholder="code"
            />
            <button type="submit" className="common-button">
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
