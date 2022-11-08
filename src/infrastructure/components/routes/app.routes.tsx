import { Routes, Route, Navigate } from 'react-router-dom';
import { AboutUs } from '../../../features/about.us/pages/about.us';
import { Details } from '../../../features/details/details';
import { Favorites } from '../../../features/favorites/favorites';
import { Home } from '../../../features/home/home';
import ListPage from '../../../features/list.characters/page/list.page';

import { PrivateRoute } from '../private.routes/private.route';

export function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="home" element={<Home></Home>}></Route>
                <Route
                    path="Favorites"
                    element={
                        <PrivateRoute>
                            <Favorites></Favorites>
                        </PrivateRoute>
                    }
                ></Route>
                <Route
                    path="Characters"
                    element={<ListPage></ListPage>}
                ></Route>
                <Route
                    path="/Details/:id"
                    element={<Details></Details>}
                ></Route>
                <Route path="AboutUs" element={<AboutUs></AboutUs>}></Route>
                <Route path="" element={<Home></Home>}></Route>

                <Route path="*" element={<Navigate replace to="" />}></Route>
            </Routes>
        </>
    );
}
