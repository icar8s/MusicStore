import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout.tsx";
import {ProtectedRoute} from "./misc/Protected.tsx";
import {Login} from "./components/Login/Login.tsx";
import {Products} from "./components/Products/Products.tsx";
import {useThemeStore} from "./stores/theme/useThemeStore.ts";
import {Register} from "./components/Register/Register.tsx";
import {AdminPanel} from "./components/AdminPanel/AdminPanel.tsx";
import {Home} from "./components/Home/Home.tsx";
import {ModerationPanel} from "./components/ModerationPanel/ModerationPanel.tsx";
import {ContactUs} from "./components/ContactUs/ContactUs.tsx";

function App() {

    const {selectedTheme} = useThemeStore();

    return <div className={`${selectedTheme}-theme container`}>
        <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
        />
        <BrowserRouter>
            <Routes>
                <Route path={Layout.meta.route} element={<ProtectedRoute component={Layout}/>}>
                    <Route path={Login.meta.route} element={<Login/>}/>
                    <Route path={Register.meta.route} element={<Register/>}/>
                    <Route path={Products.meta.route} element={<Products/>}/>
                    <Route path={Home.meta.route} element={<Home/>}/>
                    <Route path={AdminPanel.meta.route} element={<AdminPanel/>}/>
                    <Route path={ModerationPanel.meta.route} element={<ModerationPanel/>}/>
                    <Route path={ContactUs.meta.route} element={<ContactUs/>}/>
                </Route>

                <Route path="*" element={<>Not Found</>}/>
            </Routes>

        </BrowserRouter>
    </div>
}

export default App
