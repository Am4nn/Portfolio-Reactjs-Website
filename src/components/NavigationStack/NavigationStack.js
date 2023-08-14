import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import Home from '../../pages/Home/Home';
import Notice from '../../pages/Notice/Notice';
import Test from '../../pages/Test/Test';
import NotFound from '../../pages/NotFound/NotFound';

const NavigationStack = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Navigate replace to='/home' />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/notice' element={<Notice />} />
            <Route exact path='/test' element={<Test />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default NavigationStack;