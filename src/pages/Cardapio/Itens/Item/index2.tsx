import styles from "./Item.module.scss";
import logo from "assets/logo.svg";

interface ItemProps {
    item: {
        title: string;
        description: string;
        photo: string;
        size: number;
        serving: number;
        price: number;
        id: number;
        category: {
            id: number;
            label: string;
        };
    };
}

export default function Item({ item }: ItemProps) {
    return (
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={logo} alt="imagem" />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
                <div className={styles.item__tags}>
                    <div className={styles.item__tipo}>{item.category.label}</div>
                    <div className={styles.item__porcao}>{`${item.size}g`}</div>
                    <div className={styles.item__qtdpessoas}>{item.serving}</div>
                    <div className={styles.item__valor}>{`R$ ${item.price}`}</div>
                </div>
            </div>
        </div>
    );
}
