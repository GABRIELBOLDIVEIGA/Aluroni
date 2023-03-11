import styles from "./Inicio.module.scss";
import stylesTema from "styles/Tema.module.scss";
import cardapio from "data/cardapio.json";
import nossaCasa from "assets/nossa_casa.png";
import { useNavigate } from "react-router-dom";
import { Prato } from "types/Prato";

export default function Inicio() {
    let pratrosRecomendados = [...cardapio];
    pratrosRecomendados = pratrosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);
    const navigate = useNavigate();

    function redirecionarParaDetalher(prato: Prato) {
        navigate(`/prato/${prato.id}`, { state: { prato } /* replace: true */ }); // state permite que o objeto seja passado // replace remove a pg atual no historico
    }

    return (
        <section>
            <h3 className={stylesTema.titulo}>Recomendações da cozinha</h3>
            <div className={styles.recomendados}>
                {pratrosRecomendados.map((item) => (
                    <div key={item.id} className={styles.recomendado}>
                        <div className={styles.recomendado__imagem}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button
                            className={styles.recomendado__botao}
                            onClick={() => {
                                redirecionarParaDetalher(item);
                            }}
                        >
                            Ver mais
                        </button>
                    </div>
                ))}
            </div>
            <h3 className={stylesTema.titulo}> Nossa casa </h3>
            <div className={styles.nossaCasa}>
                <img src={nossaCasa} alt="Casa do alurone" />
                <div className={styles.nossaCasa__endereco}>
                    Roa Vergueiro, 385 <br />
                    <br /> Vila Mariana - SP
                </div>
            </div>
        </section>
    );
}
