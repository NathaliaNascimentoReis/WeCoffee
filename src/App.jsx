import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Beneficios from './pages/Beneficios.jsx';
import Catalogo from './pages/Catalogo.jsx';
import Home from './pages/Home.jsx';
import Depoimentos from './pages/Depoimentos.jsx';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/beneficios" element={<Beneficios />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/depoimentos" element={<Depoimentos />} />
            </Routes>
        </BrowserRouter>
    );
}
