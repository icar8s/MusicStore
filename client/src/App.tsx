import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout.tsx";
import {ProtectedRoute} from "./misc/Protected.tsx";
import {Login} from "./components/Login/Login.tsx";
import {Products} from "./components/Products/Products.tsx";
import {useThemeStore} from "./stores/theme/useThemeStore.ts";
import {Register} from "./components/Register/Register.tsx";
import {Home} from "./components/Home/Home.tsx";
import {ContactUs} from "./components/ContactUs/ContactUs.tsx";
import {ProductDetail} from "./components/ProductDetail/ProductDetail.tsx";
import {Cart} from "./components/Cart/Cart.tsx";

function App() {

    const {selectedTheme} = useThemeStore();

    const scope = import.meta.env.VITE_APP_SCOPE ?? "mstore";

    return <div className={`${selectedTheme}-theme container`}>
        <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
        />

        <BrowserRouter>
            <Routes>
                {
                    scope === "mstore" ? <Route path={Layout.meta.route} element={<ProtectedRoute component={Layout}/>}>
                            <Route path={Login.meta.route} element={<Login/>}/>
                            <Route path={Register.meta.route} element={<Register/>}/>
                            <Route path={Products.meta.route} element={<Products/>}/>
                            <Route path={Home.meta.route} element={<Home/>}/>
                            <Route path={Cart.meta.route} element={<Cart/>}/>
                            <Route path={ContactUs.meta.route} element={<ContactUs/>}/>
                            <Route path={ProductDetail.meta.route} element={<ProductDetail/>}/>
                        </Route> :
                        <Route path={Layout.meta.route} element={<ProtectedRoute component={Layout}/>}>
                            <Route path={Login.meta.route} element={<Login/>}/>
                            <Route path={Register.meta.route} element={<Register/>}/>
                            <Route path={Products.meta.route} element={<Products/>}/>
                            <Route path={Home.meta.route} element={<Home/>}/>
                            <Route path={Cart.meta.route} element={<Cart/>}/>
                            <Route path={ContactUs.meta.route} element={<ContactUs/>}/>
                            <Route path={ProductDetail.meta.route} element={<ProductDetail/>}/>
                        </Route>
                }

                <Route path="*" element={<>Not Found</>}/>
            </Routes>

        </BrowserRouter>
    </div>
}

export default App
