import React from 'react';
import commercial_1 from '../../../Static/Img/commercial-1.png'
import commercial_2 from '../../../Static/Img/commercial-2.png'
import commercial_3 from '../../../Static/Img/commercial-3.png'
import commercial_4 from '../../../Static/Img/commercial-4.png'
import commercial_5 from '../../../Static/Img/commercial-5.png'
import commercial_6 from '../../../Static/Img/commercial-6.png'

import s from './SectionFive.module.css';

const SectionFive = () => {
    return <div className={s.sectionFive}>
        <h2 className={s.title}>Your routine simplified</h2>
        <div className={s.commercial}>
            <div className={s.commercial__day}>
                <p className={s.day__title}>A.M. ROUTINE</p>
                <div className={s.day__wrap}>
                    <img className={s.day__img} src={commercial_1} alt="product"/>
                    <p className={s.day__text}>CLEANSER</p>
                </div>
                <div className={s.day__wrap}>
                    <img className={s.day__img} src={commercial_2} alt="product"/>
                    <p className={s.day__text}>TONER</p>
                </div>
                <div className={s.day__wrap}>
                    <img className={s.day__img} src={commercial_3} alt="product"/>
                    <p className={s.day__text}>SERUM</p>
                </div>
                <div className={s.day__wrap}>
                    <img className={s.day__img} src={commercial_4} alt="product"/>
                    <p className={s.day__text}>MOISTURISER</p>
                </div>
                <div className={s.day__wrap}>
                    <img className={s.day__img} src={commercial_5} alt="product"/>
                    <p className={s.day__text}>SPF30</p>
                </div>
            </div>
            <div className={`${s.commercial__day} ${s.commercial__day_black}`}>
                <p className={`${s.day__title} ${s.day__title_white}`}>A.M. ROUTINE</p>
                <div className={s.day__wrap}>
                    <img className={s.day__img} src={commercial_1} alt="product"/>
                    <p className={s.day__text}>CLEANSER</p>
                </div>
                <div className={s.day__wrap}>
                    <img className={s.day__img} src={commercial_2} alt="product"/>
                    <p className={s.day__text}>TONER</p>
                </div>
                <div className={s.day__wrap}>
                    <img className={s.day__img} src={commercial_3} alt="product"/>
                    <p className={s.day__text}>SERUM</p>
                </div>
                <div className={s.day__wrap}>
                    <img className={s.day__img} src={commercial_6} alt="product"/>
                    <p className={s.day__text}>MOISTURISER</p>
                </div>
            </div>
        </div>
    </div>
}   
        export default SectionFive;