import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import {PageLoader} from "widgets/PageLoader/PageLoader";

const AppRouter = () => (
    <Suspense fallback={<PageLoader/>}>
        <Routes>
            {routeConfig.map(({ element, path }) => (
                <Route
                    path={path}
                    key={path}
                    element={(
                        <div className="page-wrapper">
                            {element}
                        </div>
                    )}
                />
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;
