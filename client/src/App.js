import React from 'react';
import { BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ScrollUpBtn from './components/ScrollUpBtn/ScrollUpBtn';
import MouseGradient from './components/MouseGradient/MouseGradient';
import NavigationStack from './components/NavigationStack/NavigationStack';
import Footer from './components/Footer/Footer';

import 'bootstrap'
import './global.css';
import './transitions.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <ScrollUpBtn />
            <MouseGradient />
            <NavigationStack />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
