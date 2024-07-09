import './style.css'
import logo from '../../img/logo.png'
import footerSvg1 from '../../img/footer-svg.png'
import footerBtnUp from '../../img/Button.png'
import footerInstagramSvg from '../../img/insta.png'
import footerTelegramSvg from '../../img/telegram.png'
import footerTwitterSvg from '../../img/twiter.png'
import footerLinkdinSvg from '../../img/linkdin.png'


const Footer=()=>{
    return(
        <div className="all-padding footer">
        <div className="footer-first-row">
            <div className="footer-logo">
                <img src={logo} alt="" />
            </div>
    
            <div className="footer-menu">
                <a href="#"><p>پرسش های متداول</p></a>
                <a href="#"><p>تماس با ما</p></a>
                <a href="#"><p>درباره فیلم نت</p></a>
                <a href="#"><p>قوانین و مقررات</p></a>
            </div>
    
            <div className="footer-part-app">
                <img src={footerSvg1} alt="" />
                <p>دریافت اپلیکیشن های فیلم‌نت</p>
            </div>
        </div>

        <div className="footer-second-row">
            <div className="back-button">
                <a href="#top">
                    <img src={footerBtnUp} /></a>
            </div>
            <div className="social-media-part">
                <div className="social-media-box">
                    <a href="#"><img src={footerInstagramSvg} alt="" /></a>
                    <a href="#"><img src={footerTelegramSvg} alt="" /></a>
                    <a href="#"><img src={footerTwitterSvg} alt="" /></a>
                    <a href="#"><img src={footerLinkdinSvg} alt="" /></a>
                </div>
            </div>
        </div>

        <div className="footer-bottom-row">
            <div>
                <p>کلیه‌ی حقوق مادی و معنوی اپلیکیشن «فیلم‌نت» متعلق به شرکت «پارس فیلم‌نت» است.</p>
            </div>
            <div>
                <img src="../img/Vector.png" alt="" />
            </div>
        </div>
    </div>
    )
}

export default Footer