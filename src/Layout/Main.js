import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import SocialIcon from '../Pages/Shared/SocialIcon/SocialIcon';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <SocialIcon></SocialIcon>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;