import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home.tsx";
import Form3 from "./Form3";

function Router(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Form3 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;