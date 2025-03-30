import './App.css'
import {RouterProvider} from "react-router/dom";
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router";
import {Root} from "./Routes/Root.jsx";
import {MainPage} from "./Components/MainPage/MainPage.jsx";
import {ErrorPage} from "./ErrorPage/ErrorPage.jsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchNavigation} from "./features/navigationSlice.js";
import {fetchColors} from "./features/colorSlice.js";
import {ProductPage} from "./Components/ProductPage/ProductPage";
import {CartPage} from "./Components/CartPage/CartPage.jsx";
import {FavoritePage} from "./Components/FavoritePage/FavoritePage.jsx";
import {SearchPage} from "./Components/SearchPage/SearchPage";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element={<MainPage />} />
            <Route path='/catalog/:gender/:category?' element={<MainPage />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/favorite' element={<FavoritePage />} />
            <Route path='/search' element={<SearchPage />} />

            <Route path='*' element={<ErrorPage />} />
        </Route>
    )
)

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNavigation());
        dispatch(fetchColors());
    }, [dispatch]);

    return (
        <RouterProvider router={router}></RouterProvider>
    )
}








