import styles from "./Prato.module.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import cardapio from "data/cardapio.json";
import TagsPrato from "components/TagsPrato";
import PaginaNaoEncontrada from "pages/PaginaNaoEncontrada/index";
import PaginaBase from "components/PaginaBase";

export default function Prato() {
    console.log(useParams());
    console.log(useLocation());
    console.log(useParams());

    const { id } = useParams();
    const navigate = useNavigate();
    const prato = cardapio.find((item) => item.id === Number(id));

    return prato ? (
        <PaginaBase>
            <button
                className={styles.voltar}
                onClick={() => {
                    navigate(-1);
                }}
            >
                <BiArrowBack />
                Voltar
            </button>
            <section className={styles.container}>
                <h1 className={styles.titulo}>{prato.title}</h1>
                <div className={styles.imagem}>
                    <img src={prato.photo} alt={prato.title} />
                </div>
                <div className={styles.conteudo}>
                    <p className={styles.conteudo__descricao}>{prato.description}</p>
                    <TagsPrato {...prato} />
                </div>
            </section>
        </ PaginaBase>
    ) : (
        <PaginaNaoEncontrada />
    );
}
