import style from './modules/Footer.module.css'

import logo from './images/logofooter.png'
function Footer(){
    return (
        <div className={style.contain}>
            <div className={style.content}>
                <div className={style.logop}>
                    <img src={logo} alt=""/>
                    <p>@2026 - Developed by Artic</p>
                </div>
                <div className={style.escrita}>
                    <div>
                        <p><strong>Social media</strong></p>
                        <p>Discord</p>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>X</p>
                        <p>LinkedIn</p>
                    </div>
                    <div>
                        <p><strong>Discover</strong></p>
                        <p>Mission by TrainWell</p>
                        <p>TrainWell´s team</p>
                    </div>
                </div>
                <div className={style.logop}>
                    <div className={style.buttoncontact}>Contact us</div>
                    <p>Help & Support</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
