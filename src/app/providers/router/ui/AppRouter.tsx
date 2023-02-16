import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routeConfig.map(({element, path}) => (
                    <Route path={path} element={element} key={path}/>
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;