import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { IconBackground } from '../assets';

export const Auth: FC = () => {
  return (
    <div className=" w-screen h-screen overflow-hidden">
      <div className="flex">
        <img src={IconBackground} alt="Background" />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
