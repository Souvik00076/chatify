import { FC } from 'react';
import { IconLogout, IconLogoWhite, IconSettings } from '../../assets';

export const Menu: FC = () => {
  return (
    <div className="h-[60px] w-full">
      <div className="w-full bg-primary-purple  h-full px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-white">Chatify</h1>
            <img
              src={IconLogoWhite}
              className="translate-y-[5px]"
              alt="logo"
              width={36}
              height={36}
            />
          </div>
          <div className="flex items-center gap-4">
            <img
              src={IconSettings}
              alt="logo"
              width={24}
              height={24}
              className="hover:cursor-pointer"
            />
            <img
              src={IconLogout}
              alt="logo"
              width={24}
              height={24}
              className="hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
