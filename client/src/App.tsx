import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import {ProtectedRoute} from "./misc/Protected.tsx";
import {Login} from "./components/Login/Login.tsx";
import {Products} from "./components/Products/Products.tsx";
import {useThemeStore} from "./stores/theme/useThemeStore.ts";
import {Register} from "./components/Register/Register.tsx";
import {Home} from "./components/Home/Home.tsx";
import {ContactUs} from "./components/ContactUs/ContactUs.tsx";
import {ProductDetails} from "./components/ProductDetails/ProductDetails.tsx";
import {Cart} from "./components/Cart/Cart.tsx";

function App() {

    const {selectedTheme} = useThemeStore();
    return <div className={`${selectedTheme}-theme container`}>
        <BrowserRouter>
            <Routes>
                <Route path={Layout.meta.route} element={<ProtectedRoute component={Layout}/>}>
                    <Route path={Login.meta.route} element={<Login/>}/>
                    <Route path={Register.meta.route} element={<Register/>}/>
                    <Route path={Products.meta.route} element={<Products/>}/>
                    <Route path={Home.meta.route} element={<Home/>}/>
                    <Route path={Cart.meta.route} element={<Cart/>}/>
                    <Route path={ContactUs.meta.route} element={<ContactUs/>}/>
                    <Route path={ProductDetails.meta.route} element={<ProductDetails/>}/>
                </Route>

                <Route path="*" element={<>Not Found</>}/>
            </Routes>

        </BrowserRouter>
    </div>
}

export default App
