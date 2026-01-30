import SecaoVideo from "../sections/SecaoVideo";
import SecaoCards from "../sections/SecaoCards";
import SecaoComentarios from "../sections/SecaoComentarios";
import style from './modules/Header.module.css'
import logomin from "./images/logomin.png";

function Header(){
    return (
        <div className={style.header}>
            <div className={style.nav}>
                <img src={logomin} alt=""/>
                <div className={style.options}>
                    <p className={style.navoption}>About</p>
                    <p className={style.navoption}>Plans</p>
                    <p className={style.navoption}>Our team</p>
                    <p className={style.navoption}>Contact</p>
                    <p className={style.navbutton}>I want to be part!</p>
                </div>
            </div>
            <div className={style.infoheader}>
                <div className={style.write}>
                    <h2 className={style.partone}>We Take Care Of Your</h2>
                    <h2 className={style.partwo}>Health.</h2>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dictum dapibus vestibulum. Donec vehicula rhoncus dui a mattis. Donec non metus feugiat, tristique diam ut, posuere leo.</p>
                    <div className={style.down}>
                        <p className={style.planbutton}>See the plans</p>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 640 640">
                            <path
                                d="M297.4 566.6C309.9 579.1 330.2 579.1 342.7 566.6L502.7 406.6C515.2 394.1 515.2 373.8 502.7 361.3C490.2 348.8 469.9 348.8 457.4 361.3L352 466.7L352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 466.7L182.6 361.3C170.1 348.8 149.8 348.8 137.3 361.3C124.8 373.8 124.8 394.1 137.3 406.6L297.3 566.6z"/>
                        </svg>
                    </div>
                </div>
                <div className={style.fundoimg}>

                </div>
            </div>
        </div>
    )
}

export default Header;
