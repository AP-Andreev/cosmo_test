import React from 'react';
import box__img_1 from '../../../Static/Img/box__img1.png'
import box__img_2 from '../../../Static/Img/box__img2.png'
import box__img_3 from '../../../Static/Img/box__img3.png'
import box__img_4 from '../../../Static/Img/box__img4.png'
import grade from '../../../Static/Img/grade.svg'
import sticker_1 from '../../../Static/Img/sticker1.png'
import s from './SectionThree.module.css';

const SectionThree = () => {
    return <div className={s.sectionThree}>
        <h2 className={s.title}> <samp className={s.title_italic}>Personalized</samp>Singles</h2>
        <h3 className={s.subtitle}>Get singles from your personalized day and night set</h3>
        <div className={s.grid__wrap}>
            <div className={s.grid}>
                <div className={s.grid__box}>
                    <div className={s.box__wrapImg}>
                        <img className={s.box__img} src={box__img_1} alt="product"/>
                    </div>
                    <div className={s.benefits}>
                        <h2 className={s.benefits__title}>Day Serum<br/>Drop of Perfection</h2>
                        <h3 className={s.benefits__subtitle}>A gentle day serum with upto 11 Swiss
                            active ingredients</h3>
                        <p className={s.benefits__price}>USD 20 | 30ml</p>
                        <div className={s.benefits__grade}>
                            <img className={s.grade__points} src={grade} alt="points"/>
                            <p className={s.grade__prestige}>100 Reviews</p>
                        </div>
                        <button className={s.button}>Add to cart</button>
                    </div>
                </div>
                <div className={s.grid__box}>
                    <div className={s.box__wrapImg}>
                        <img className={s.box__img} src={box__img_2} alt="product"/>
                        <img className={s.box__sticker} src={sticker_1} alt="sticker"/>
                    </div>
                    <div className={s.benefits}>
                        <h2 className={s.benefits__title}>Day Moisturiser<br/>Matte &#38; Moist</h2>
                        <h3 className={`${s.benefits__subtitle} ${s.benefits__subtitle_Weight300}`}>A moisturiser tailored to your skin type, gives hydration all day
                            long</h3>
                        <p className={s.benefits__price}>USD 20 | 30ml</p>
                            <div className={s.benefits__grade}>
                                <img className={s.grade__points} src={grade} alt="points"/>
                                <p className={s.grade__prestige}>100 Reviews</p>
                            </div>
                            <button className={s.button}>Add to cart</button>
                    </div>
                </div>
                <div className={s.grid__box}>
                    <div className={s.box__wrapImg}>
                        <img className={s.box__img} src={box__img_3} alt="product"/>
                    </div>
                    <div className={s.benefits}>
                        <h2 className={s.benefits__title}>Night Serum<br/>Drop of Softness</h2>
                        <h3 className={`${s.benefits__subtitle} ${s.benefits__subtitle_Weight300}`}>A gentle night serum with upto 11 Swiss active ingredients</h3>
                        <p className={s.benefits__price}>USD 20 | 30ml</p>
                            <div className={s.benefits__grade}>
                                <img className={s.grade__points} src={grade} alt="points"/>
                                <p className={s.grade__prestige}>100 Reviews</p>
                            </div>
                            <button className={s.button}>Add to cart</button>
                    </div>
                </div>
                <div className={s.grid__box}>
                    <div className={s.box__wrapImg}>
                        <img className={s.box__img} src={box__img_4} alt="product"/>
                    </div>
                    <div className={s.benefits}>
                        <h2 className={s.benefits__title}>Night Cream<br/>Milky Way</h2>
                        <h3 className={`${s.benefits__subtitle} ${s.benefits__subtitle_Weight300}`}>A nourishing cream to repair and put your skin damage to sleep.</h3>
                        <p className={s.benefits__price}>USD 20 | 30ml</p>
                            <div className={s.benefits__grade}>
                                <img className={s.grade__points} src={grade} alt="points"/>
                                <p className={s.grade__prestige}>100 Reviews</p>
                            </div>
                            <button className={s.button}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}   
        export default SectionThree;