import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import {ProtectedRoute} from "./misc/Protected.tsx";
import Login from "./components/Login/Login.tsx";

function App() {
    return <BrowserRouter>
        <Routes>
            <Route path={Layout.meta.route} element={<ProtectedRoute component={Layout}/> }>
                <Route path={Login.meta.route} element={<Login />}/>
            </Route>

            <Route path="*" element={<>Not Found</>} />
        </Routes>

    </BrowserRouter>
}

export default App
