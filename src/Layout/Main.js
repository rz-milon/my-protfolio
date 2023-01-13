import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import SocialIcon from '../Components/SocialIcon/SocialIcon';

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