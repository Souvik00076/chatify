import { FC } from 'react';

export const ChatPanel: FC = () => {
  return (
    <div className="w-[23%] bg-red-500  h-full overflow-y-scroll hide-scrollbar">
      <div>
        <h1 className="text-xl text-primary-purple">Chats</h1>
        <input type="text" className="common-input" placeholder="Search" />
        <div className="flex items-center gap-2">
          <span>Active</span>
          <div className="w-[6px] rounded-full h-[6px] bg-primary-purple"></div>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
};
