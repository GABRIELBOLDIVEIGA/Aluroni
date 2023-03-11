import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "pages/Inicio/index";
import Cardapio from "pages/Cardapio/index";
import Sobre from "pages/Sobre";
import Menu from "components/Menu";
import PaginaBase from "components/PaginaBase";
import Rodape from "components/Rodape";
import PaginaNaoEncontrada from "pages/PaginaNaoEncontrada/index";
import Prato from "pages/Prato";

export default function AppRouter() {
    return (
        <main className="container">
            <Router>
                <Menu />
                <Routes>
                    <Route path="/" element={<PaginaBase />}>
                        <Route index element={<Inicio />} />
                        <Route path="cardapio" element={<Cardapio />} />
                        <Route path="sobre" element={<Sobre />} />
                    </Route>
                    <Route path="prato/:id" element={<Prato />} />
                    <Route path="*" element={<PaginaNaoEncontrada />} />
                </Routes>
                <Rodape />
            </Router>
        </main>
    );
}
