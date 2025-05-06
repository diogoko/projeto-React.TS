import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home.tsx";
import Form3 from "./Form3";
import ListaCadastros from './ListaCadastros.tsx';

function Router(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Form3 />} />
                <Route path="/lista-cadastros" element={<ListaCadastros />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;