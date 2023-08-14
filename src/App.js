import React from 'react';
import { BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ScrollUpBtn from './components/ScrollUpBtn/ScrollUpBtn';
import NavigationStack from './components/NavigationStack/NavigationStack';
import 'bootstrap'
import './index.css';
import './transitions.css';

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <ScrollUpBtn />
            <NavigationStack />
        </BrowserRouter>
    );
}

export default App;
