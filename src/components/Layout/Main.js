import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import LeftSideSocialIcon from '../Shared/LeftSideSocialIcon/LeftSideSocialIcon';



const Main = () => {
    return (
        <>
            <Header />
            <LeftSideSocialIcon />
            <Outlet/>
        </>
    );
};

export default Main;