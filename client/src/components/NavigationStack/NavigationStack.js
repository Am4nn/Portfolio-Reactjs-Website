import React, { Suspense } from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Home = React.lazy(() => import('../../pages/Home/Home'));
const NotFound = React.lazy(() => import('../../pages/NotFound/NotFound'));

const NavigationStack = () => {
    return (
        <Suspense fallback={<FallbackComponent />}>
            <Routes>
                <Route exact path='/' element={<Navigate replace to='/home' />} />
                <Route exact path='/home' element={<Home />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}

const FallbackComponent = () => {
    return (
        <div style={{
            position: "absolute",
            top: "0",
            width: "100%",
            marginTop: "5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <LoadingSpinner />
        </div>
    )
}

export default NavigationStack;
