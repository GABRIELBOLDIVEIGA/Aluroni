import { memo } from "react";
import styles from "./Filtros.module.scss";
import friltros from "./filtros.json";
import classNames from "classnames";

type IOpcao = typeof friltros[0];

interface FiltroProps {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

function Filtros({ filtro, setFiltro }: FiltroProps) {
    function selecionarFiltro(opcao: IOpcao) {
        if (filtro === opcao.id) return setFiltro(null);

        return setFiltro(opcao.id);
    }

    return (
        <div className={styles.filtros}>
            {friltros.map((opcao) => {
                return (
                    <button
                        className={classNames({
                            [styles.filtros__filtro]: true,
                            [styles["filtros__filtro--ativo"]]: filtro === opcao.id, // Para o eu do futuro com memoria ruim https://cursos.alura.com.br/course/react-arquivos-estaticos/task/100281
                        })}
                        key={opcao.id}
                        onClick={() => selecionarFiltro(opcao)}
                    >
                        {opcao.label}
                    </button>
                );
            })}
        </div>
    );
}

export default memo(Filtros);