import React from 'react';
import icon from '../../../Static/Img/icon.svg'
import icon_1 from '../../../Static/Img/icon_1.png'
import icon_2 from '../../../Static/Img/icon_2.svg'
import icon_3 from '../../../Static/Img/icon_3.svg'
import banner__img from '../../../Static/Img/banner.png'
import s from './SectionSix.module.css';

const SectionSix = () => {
    return <div className={s.sectionSix}>
        <div className={s.banner}>
            <div className={s.wrap}>
                <div className={s.benefits}>
                    <p className={s.title}>Spritz to reapply, on-the-go.<br/>With your makeup on. </p>
                    <p className={s.promo}>PROMO : DREAMSSU</p>
                    <div className={s.desc}>
                        <img className={s.icon} src={icon} alt="icon"/>
                        <p className={s.icon__text}><span
                                className={s.icon__text_Weight800}>Free</span> Shipping in SG</p>
                        <img className={s.icon} src={icon_1} alt="icon_1"/>
                        <img className={s.icon} src={icon_2} alt="icon_2"/>
                        <p className={s.icon__text}>100% Clean</p>
                        <img className={s.icon} src={icon_3} alt="icon_3"/>
                        <p className={s.icon__text}>Swiss-Made</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}   
        export default SectionSix;