import styles from "./Item.module.scss";
import { Prato } from "types/Prato";
import TagsPrato from "components/TagsPrato";
import { useNavigate } from "react-router-dom";
import { memo } from "react";

function Item(item: Prato) {
    const { title, description, photo, id } = item;
    const navigate = useNavigate();
    
    return (
        <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
            <div className={styles.item__imagem}>
                <img src={photo} alt={title} title={title} />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <TagsPrato {...item} />
            </div>
        </div>
    );
}

export default memo(Item);
