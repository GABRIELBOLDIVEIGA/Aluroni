import styles from "./PaginaNaoEncontrada.module.scss";
import { ReactComponent as NotFoundImage } from "assets/not_found.svg";
import classNames from "classnames";
import stylesTema from "styles/Tema.module.scss";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function PaginaNaoEncontrada() {
    const navigate = useNavigate();

    return (
        <div
            className={classNames({
                [styles.container]: true,
                [stylesTema.container]: true,
            })}
        >
            <div className={styles.voltar}>
                <button
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    <BiArrowBack />
                    Voltar
                </button>
            </div>
            <NotFoundImage />
        </div>
    );
}
