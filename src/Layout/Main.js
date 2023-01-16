import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import LeftSideSocialIcon from '../Pages/Shared/LeftSideSocialIcon/LeftSideSocialIcon';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <LeftSideSocialIcon></LeftSideSocialIcon>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;