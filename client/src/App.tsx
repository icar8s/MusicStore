import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./components/layout/Layout.tsx";

function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/> } />
        </Routes>
    </BrowserRouter>
}

export default App
