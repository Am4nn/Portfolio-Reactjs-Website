import React from 'react';
import { BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ScrollUpBtn from './components/ScrollUpBtn/ScrollUpBtn';
import NavigationStack from './components/NavigationStack/NavigationStack';
import StateProvider from './context/state';
// import MouseGradient from './components/MouseGradient/MouseGradient';

import 'bootstrap'
import './global.css';
import './transitions.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <BrowserRouter>
            <StateProvider>
                <NavBar />
                <ScrollUpBtn />
                {/* <MouseGradient /> */}
                <NavigationStack />
            </StateProvider>
        </BrowserRouter>
    );
}

export default App;
