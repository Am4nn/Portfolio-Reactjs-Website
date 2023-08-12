import React from 'react';
import classes from './App.module.css';
import 'bootstrap'
import Home from './pages/Home/Home';
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import NotFound from './pages/NotFound/NotFound';
import NavBar from './components/NavBar/NavBar';
import Notice from './pages/Notice/Notice';
import ScrollUpBtn from './components/ScrollUpBtn/ScrollUpBtn';

const App = () => {
    return (
        <BrowserRouter>
            <div className={classes.App}>
                <NavBar />
                <ScrollUpBtn />
                <Routes>
                    <Route exact path='/' element={<Navigate replace to='/home' />} />
                    <Route exact path='/home' element={<Home />} />
                    <Route exact path='/notice' element={<Notice />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
