import React from 'react';
import logo from '../../Static/Img/lovefromyours-logo.png';
import twitter from '../../Static/Img/twitter.svg';
import facebook from '../../Static/Img/facebook.svg';
import instagram from '../../Static/Img/instagram.svg';
import likee from '../../Static/Img/likee.svg';
import pinterest from '../../Static/Img/pinterest.svg';
import youtube from '../../Static/Img/youtube.svg';
import s from './Footer.module.css';


const Footer = () => {
    return <footer className= 'footer'>
        <footer className={s.footer}>
            <div className={s.wrap}>
                <div className={s.aside}>
                    <img className={s.logo} src={logo} alt="logo"/>
                    <p className={s.text}>Want to stay updated with us?</p>
                    <div className={s.wrap__icon}>
                        <a className={s.icon} href="https://twitter.com"> <img src={twitter} alt="twitter"/>
                        </a>
                        <a className={s.icon} href="https://www.facebook.com/"> <img src={facebook}
                                alt="facebook"/> </a>
                        <a className={s.icon} href="https://www.instagram.com/"> <img src={instagram}
                                alt="instagram"/> </a>
                        <a className={s.icon} href="https://likee.video/"> <img src={likee} alt="likee"/> </a>
                        <a className={s.icon} href="https://www.pinterest.ru/"> <img src={pinterest}
                                alt="pinterest"/> </a>
                        <a className={s.icon} href="https://www.youtube.com/"> <img src={youtube}
                                alt="youtube"/> </a>
                    </div>
                    <form className={s.from}>
                        <label>
                            <input className={s.email} type="email" name="email-address"
                                value="Enter email id here" required/>
                        </label>
                        <input className={s.subscribe} type="submit" name="submit" value="Subscribe"/>
                        <input className={`${s.subscribe} ${s.mobile}`} type="submit" name="submit" value=""/>
                    </form>
                </div>
                <div className={s.lineMobile}></div>
                <div className={s.more}>
                    <div className={s.more__wrap}>
                        <a className={s.span} href="#">Skin Assessment</a>
                        <a className={s.span} href="#">Who We Are</a>
                        <a className={s.span} href="#">Log In</a>
                        <a className={s.span} href="#">Career</a>
                        <a className={s.span} href="#">Ingridients</a>
                        <a className={s.span} href="#">Reviews</a>
                        <a className={s.span} href="#">Products</a>
                        <a className={s.span} href="#">Contact</a>
                        <a className={s.span} href="#">Blog</a>
                        <a className={s.span} href="#">FAQs</a>
                    </div>
                </div>
                <div className={s.lineMobile}></div>
            </div>
            <div className={s.line}></div>
            <div className={s.footer__bar}>
                <a className={s.bar__text} href="#">Privacy Policy</a>
                <a className={s.bar__text} href="#">Terms of Service</a>
                <a className={s.bar__text} href="#">© 2019 Yours Skincare. All rights reserved.</a>
            </div>
        </footer>
    </footer>
}

export default Footer;