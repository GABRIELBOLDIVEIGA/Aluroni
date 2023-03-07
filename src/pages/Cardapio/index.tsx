import styles from "./Cardapio.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Buscador from "pages/Cardapio/Buscador";
import React, { useState } from "react";
import Filtros from "./Filtro";
import Ordenador from './Ordenador/index';

export default function Cardapio() {
    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<number | null>(null);

    return (
        <main>
            <nav className={styles.menu}>
                {/* <img src={logo} alt="logo aluroni" /> */}
                <Logo />
                Aluroti
            </nav>

            <header className={styles.header}>
                <div className={styles.header__text}>A casa do codigo da massa</div>
            </header>

            <section className={styles.cadapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Buscador 
                    busca={busca} 
                    setBusca={setBusca}
                />
                <div className={styles.cardapio__filtros}> 
                    <Filtros filtro={filtro} setFiltro={setFiltro}/>
                    <Ordenador />
                </div>
            </section>
        </main>
    );
}
