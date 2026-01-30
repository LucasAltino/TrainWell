import styles from '../modules/Comentario.module.css'

function Comentario(props) {
    return (
        <div className={styles.ComenDiv}>
            <h4 className={styles.nomeC}>{props.nome}</h4>
            <img className={styles.estrela} src={props.avaliacao} alt="avalicão" />
            <p className={styles.texto}>{props.comentario}</p>
        </div>
    )
}export default Comentario;