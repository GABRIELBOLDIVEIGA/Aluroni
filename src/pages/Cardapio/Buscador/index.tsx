import React, { memo, useMemo } from "react";
import styles from "./Buscador.module.scss";
import { CgSearch } from "react-icons/cg";

interface BuscadorProps {
    busca: string;
    setBusca: React.Dispatch<React.SetStateAction<string>>;
}

function Buscador({ busca, setBusca }: BuscadorProps) {
    // forma longa de escrever
    // const aoAlterado = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setBusca(event.target.value)
    //     console.log(event.target.value)
    // }

    const elemento = useMemo(() =>  <CgSearch size={20} color="#4C4D5E" />, []);

    return (
        <div className={styles.buscador}>
            {/* <input onChange={aoAlterado} value={busca}/> // forma longa */}
            <input onChange={(event) => setBusca(event.target.value)} value={busca} placeholder="Buscar" />
            {/* <CgSearch size={20} color="#4C4D5E" /> */}
            {elemento}
        </div>
    );
}

export default memo(Buscador);