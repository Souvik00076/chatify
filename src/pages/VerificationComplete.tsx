import { FC } from 'react';
import { IconLogo } from '../assets';

export const VerificationComplete: FC = () => {
  return (
    <div className="h-screen w-screen desktop-bg-container flex items-center justify-center flex-col">
      <div className="w-[600px] text-center">
        <h1 className="text-6xl text-primary-purple font-bold">
          Welcome To Chatify
        </h1>
        <h3 className="text-gray-400 text-lg mt-4">
          "Connecting the World, One Message at a Time"
        </h3>
        <button className="common-button mt-8 w-[200px]">Continue</button>
        <div className="w-full h-full flex items-center justify-center">
          <img src={IconLogo} alt="Logo" className="w-32 h-24" />
        </div>
      </div>
    </div>
  );
};
