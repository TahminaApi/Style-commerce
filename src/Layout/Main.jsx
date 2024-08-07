import React from 'react';
import Header from "../assets/components/Shared/Header/Header";
import { Outlet } from 'react-router-dom';
import Footer from '../assets/components/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='pt-20'>
                <Outlet></Outlet>
            </div>
            <div className='pt-20'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;