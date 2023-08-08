import React from 'react';
import { Outlet } from 'react-router-dom';
import UserChatComponent from './UserChatComponent';

const RouteswithChatComponent = () => {
  return (
    <>
      <UserChatComponent />
      <Outlet />
    </>
  );
};

export default RouteswithChatComponent;
