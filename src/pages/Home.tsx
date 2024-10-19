import { FC, useState } from 'react';
import { ChatBody, ChatDetails, ChatPanel, Menu } from '../components';

export const Home: FC = () => {
  const [showChatDetails] = useState<boolean>(false);
  return (
    <div className="h-screen w-screen flex flex-col">
      <Menu />
      <div className="flex-1  flex ">
        <ChatPanel />
        <ChatBody />
        {showChatDetails && <ChatDetails />}
      </div>
    </div>
  );
};
