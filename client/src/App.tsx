import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import {useThemeStore} from "./stores/theme/useThemeStore.ts";
import {ProtectedRoute} from "./misc/Protected.tsx";
import {Login} from "./components/Login/Login.tsx";
import {Products} from "./components/Products/Products.tsx";
import {Register} from "./components/Register/Register.tsx";
import {Home} from "./components/Home/Home.tsx";
import {ContactUs} from "./components/ContactUs/ContactUs.tsx";
import {ProductDetail} from "./components/ProductDetail/ProductDetail.tsx";
import {Cart as Cart} from "./components/Cart/Cart.tsx";
import LayoutGameStore from "./componentsGameStore/layout/Layout.tsx";
import {LoginGameStore} from "./componentsGameStore/Login/Login.tsx";
import {ProductsGameStore} from "./componentsGameStore/Products/Products.tsx";
import {RegisterGameStore} from "./componentsGameStore/Register/Register.tsx";
import {HomeGameStore} from "./componentsGameStore/Home/Home.tsx";
import {ContactUsGameStore} from "./componentsGameStore/ContactUs/ContactUs.tsx";
import {ProductDetailGameStore} from "./componentsGameStore/ProductDetail/ProductDetail.tsx";
import {CartGameStore} from "./componentsGameStore/Cart/Cart.tsx";
import {NewsGameStore} from "./componentsGameStore/News/News.tsx";
import {News} from "./components/News/News.tsx";

function App() {
    const scope = import.meta.env.VITE_APP_SCOPE;
    const {selectedTheme} = useThemeStore();
    return <div className={`${selectedTheme}-theme container`}>
        <BrowserRouter>
            <Routes>
                {scope === "MsStore" ? (
                <Route path={Layout.meta.route} element={<ProtectedRoute component={Layout}/>}>
                    <Route path={Login.meta.route} element={<Login/>}/>
                    <Route path={Register.meta.route} element={<Register/>}/>
                    <Route path={Products.meta.route} element={<Products/>}/>
                    <Route path={Home.meta.route} element={<Home/>}/>
                    <Route path={Cart.meta.route} element={<Cart/>}/>
                    <Route path={ContactUs.meta.route} element={<ContactUs/>}/>
                    <Route path={ProductDetail.meta.route} element={<ProductDetail/>}/>
                    <Route path={News.meta.route} element={<News/>}/>
                </Route>
                ) : (
                <Route path={LayoutGameStore.meta.route} element={<ProtectedRoute component={LayoutGameStore}/>}>
                    <Route path={LoginGameStore.meta.route} element={<LoginGameStore/>}/>
                    <Route path={RegisterGameStore.meta.route} element={<RegisterGameStore/>}/>
                    <Route path={ProductsGameStore.meta.route} element={<ProductsGameStore/>}/>
                    <Route path={NewsGameStore.meta.route} element={<NewsGameStore/>}/>
                    <Route path={HomeGameStore.meta.route} element={<HomeGameStore/>}/>
                    <Route path={CartGameStore.meta.route} element={<CartGameStore/>}/>
                    <Route path={ContactUsGameStore.meta.route} element={<ContactUsGameStore/>}/>
                    <Route path={ProductDetailGameStore.meta.route} element={<ProductDetailGameStore/>}/>
                </Route>
                )}
                <Route path="*" element={<>Not Found</>}/>
            </Routes>

        </BrowserRouter>
    </div>
}

export default App
