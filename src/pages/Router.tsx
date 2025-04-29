import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./Home.tsx";
import Form from "./Form.tsx";
import Form2 from './Form2.tsx';

function Router(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Form2 />} />
            </Routes>
        </BrowserRouter>
    )

}

export default Router;