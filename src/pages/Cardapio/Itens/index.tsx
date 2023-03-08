import styles from "./Itens.module.scss";
import cardapio from "./itens.json";
import Item from "./Item";

export default function Itens() {
    return (
        <div className={styles.itens}>
            {cardapio.map((item) => (
                <div>
                     <Item {...item}  /* item={item} */ key={item.id} /> 
                </div>
            ))}
        </div>
    );
}
