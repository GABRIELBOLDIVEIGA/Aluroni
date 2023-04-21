import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menu from "components/Menu";
import Rodape from "components/Rodape";
import PaginaBase from "components/PaginaBase";

const Inicio = lazy(() => import("pages/Inicio/index"));
const Cardapio = lazy(() => import("pages/Cardapio/index"));
const Sobre = lazy(() => import("pages/Sobre"));
const Prato = lazy(() => import("pages/Prato"));
const PaginaNaoEncontrada = lazy(() => import("pages/PaginaNaoEncontrada/index"));

export default function AppRouter() {
    return (
        <main className="container">
            <Router>
                <Menu />
                <Suspense fallback={<p>Carregando...</p>}>
                    <Routes>
                        <Route path="/" element={<PaginaBase />}>
                            <Route index element={<Inicio />} />
                            <Route path="cardapio" element={<Cardapio />} />
                            <Route path="sobre" element={<Sobre />} />
                        </Route>
                        <Route path="prato/:id" element={<Prato />} />
                        <Route path="*" element={<PaginaNaoEncontrada />} />
                    </Routes>
                </Suspense>
                <Rodape />
            </Router>
        </main>
    );
}
