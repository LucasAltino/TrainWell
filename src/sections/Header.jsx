import style from './modules/Header.module.css'
import logomin from "./images/logomin.png";
import { useState } from "react";

function Header(){
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className={style.header}>
            <div className={`${style.sidebar} ${sidebarOpen ? style.open : ""}`}>
                <div className={style.optionstwo}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 640 640" onClick={() => setSidebarOpen(false)}
                    >
                        <path
                            d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/>
                    </svg>
                    <p className={style.navoptiont}><a href="#secao-video">About</a></p>
                    <p className={style.navoptiont}><a href="#plan">Plans</a></p>
                    <p className={style.navoptiont}><a href="#team">Our team</a></p>
                    <p className={style.navoptiont}><a href="#contact">Contact</a></p>
                    <p className={style.navbuttont}><a href="#plan">I want to be part!</a></p>
                </div>
            </div>

            <div className={style.nav}>
                <img src={logomin} alt=""/>
                <div className={style.options}>
                    <p className={style.navoption}><a href="#secao-video">About</a></p>
                    <p className={style.navoption}><a href="#plan">Plans</a></p>
                    <p className={style.navoption}><a href="#team">Our team</a></p>
                    <p className={style.navoption}><a href="#contact">Contact</a></p>
                    <p className={style.navbutton}><a href="#plan">I want to be part!</a></p>
                </div>
                <div className={style.bars} onClick={() => setSidebarOpen(true)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 640 640">
                        <path
                            d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>
                    </svg>
                </div>
            </div>
            <div className={style.infoheader}>
                <div className={style.write}>
                    <h2 className={style.partone}>We Take Care Of Your</h2>
                    <h2 className={style.partwo}>Health.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dictum dapibus vestibulum.
                        Donec vehicula rhoncus dui a mattis. Donec non metus feugiat, tristique diam ut, posuere
                        leo.</p>
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


