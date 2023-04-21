import styles from "./Itens.module.scss";
import cardapio from "data/cardapio.json";
import Item from "./Item";
import { useEffect, useState } from "react";
import { Cardapio } from "types/Prato";

interface ItensProps {
    busca: string;
    filtro: number | null;
    ordenador: string;
}

export default function Itens({ busca, filtro, ordenador }: ItensProps) {
    const [lista, setLista] = useState(cardapio);

    function testaBusca(title: string) {
        const regex = new RegExp(busca, "i");
        return regex.test(title);
    }

    function testeFiltro(id: number) {
        if (filtro !== null) return filtro === id;
        return true;
    }

    function ordenar(novaLista: Cardapio) {
        switch (ordenador) {
        case "porcao":
            return novaLista.sort((a, b) => (a.size > b.size ? 1 : -1));
        case "qtd_pessoas":
            return novaLista.sort((a, b) => (a.serving > b.serving ? 1 : -1));
        case "preco_mais_barato":
            return novaLista.sort((a, b) => (a.price > b.price ? 1 : -1));
        case "preco_mais_caro":
            return novaLista.sort((a, b) => (a.price > b.price ? -1 : 1));
        default:
            return novaLista;
        }
    }

    useEffect(() => {
        const novaLista = cardapio.filter((item) => testaBusca(item.title) && testeFiltro(item.category.id));

        setLista(ordenar(novaLista));
    }, [busca, filtro, ordenador]);

    return (
        <div className={styles.itens}>
            {lista.map((item) => (
                <Item {...item} key={item.id} />
            ))}
        </div>
    );
}
