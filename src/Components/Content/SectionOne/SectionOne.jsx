import React from 'react';
import grade from '../../../Static/Img/grade.svg';
import product from '../../../Static/Img/product.png';
import sticker from '../../../Static/Img/sticker.png';
import s from './SectionOne.module.css';

const SectionOne = () => {
    return <div className={s.sectionOne}>
        <h2 className={s.title}><span className={s.title_italic}>Personalized</span> Routine</h2>
        <h3 className={s.subtitle}>An effective routine designed for your skin + lifestyle + environment</h3>
        <div className={s.promo}>
            <div className={s.benefits}>
                <h2 className={s.benefits__title}>Day &#38; Night Set</h2>
                <h3 className={s.benefits__subtitle}> <span className={s.benefits__subtitle_Weight500}>4 products:</span> Day &#38;
                    Night Serums (15ml each) &#38; Moisturizers (30ml each)
                </h3>
                <p className={s.benefits__price}>$95</p>
                <div className={s.benefits__grade}>
                    <img className={s.grade__points} src={grade} alt="points"/>
                    <p className={s.grade__prestige}>100 Reviews</p>
                </div>
                <button className={s.button}>Add to cart</button>
                <button className={`${s.button} ${s.button_whiteTem}`}>Update assessment</button>
            </div>
            <div className={s.preview}>
                <img className={s.preview__product} src={product} alt="product"/>
                <img className={s.preview__sticker} src={sticker} alt="sticker"/>
                <p className={s.preview__bestseller}>Bestseller</p>
                </div>
            </div>
        </div>
}

        export default SectionOne;
