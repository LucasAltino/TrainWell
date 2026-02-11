import styles from './modules/SecaoCard.module.css'

import CardMed from "./components/CardMed";
import fotoPersoal from './images/personal.png'
import fotoNutri from './images/nutri.png'
import fotoTerapia from './images/therapist.png'
import logo from './images/logon.png'

export default function SecaoCards() {
    return (
        <div className={styles.SecaoCard}>
            <CardMed cargo="Personal Trainer" fotos={fotoPersoal} />
            <CardMed cargo="Nutricionist" fotos={fotoNutri}/>
            <CardMed cargo="THERAPIST" fotos={fotoTerapia} />

            <div className={styles.LogoArea}>
                <div className={styles.LogoImg} />
            </div>

        </div>
    )
}