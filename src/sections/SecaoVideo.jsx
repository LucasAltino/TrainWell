import styles from './modules/SecaoVideo.module.css';

function SecaoVideo() {
    return (
        <div id='secao-video' className={styles.DivPai}>
            <span>
                <h2 className={styles.TituloVideo}>
                    YOUR JOURNEY TO A <span className={styles.Destaque}>BETTER</span> YOU STARTS HERE!
                </h2>
                <p className={styles.Subtitulo}>
                    Step into a space where commitment meets progress. At TrainWell Company, we support your complete well-being through training, mental health, and nutrition. Join us and start your journey to a better you today.
                </p>

                <iframe
                    className={styles.VideoYoutube}
                    src="https://www.youtube.com/embed/O4UzhqTD60Q?si=45e0puKVfbxiqbQa"
                    title="YouTube video"
                    allowFullScreen
                ></iframe>

                <h2 className={styles.TextoInferior}>
                    EVERYTHING YOU NEED IN ONE COMPLETE PLAN!
                </h2>




            </span>


        </div>
    );
}

export default SecaoVideo;