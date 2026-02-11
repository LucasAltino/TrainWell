import styles from "../modules/CardMed.module.css";

function CardMed({cargo,fotos, direcao = "row"}){
    return (
        <div className={styles.cardDiv} style={{flexDirection: direcao}}>
            <img className={styles.foto} src={fotos} alt="Fotos" />
            <p className={styles.cargo} style={{ textAlign: direcao === "row" ? "right" : "left" }} >{cargo}</p>
        </div>
    )
} export default CardMed;