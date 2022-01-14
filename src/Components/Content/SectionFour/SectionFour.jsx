import React from 'react';
import box__img_5 from '../../../Static/Img/box__img5.png'
import box__img_6 from '../../../Static/Img/box__img6.png'
import box__img_7 from '../../../Static/Img/box__img7.png'
import box__img_8 from '../../../Static/Img/box__img8.png'
import box__img_9 from '../../../Static/Img/box__img8.png'
import sticker from '../../../Static/Img/sticker.png'
import sticker_2 from '../../../Static/Img/sticker2.png'
import grade from '../../../Static/Img/grade.svg'
import s from './SectionFour.module.css';

const SectionFour = () => {
    return <div className={s.sectionFour}>
        <h2 className={s.title}>Essentials to complement your routine</h2>
        <div className={s.grid}>
            <div className={s.grid__box}>
                <div className={s.box__wrapImg}>
                    <img className={s.box__img} src={box__img_5} alt="product"/>
                </div>
                <div className={s.benefits}>
                    <h2 className={s.benefits__title}>Cloud Factory Cleanser</h2>
                    <h3 className={`${s.benefits__subtitle} ${s.benefits__subtitle_Weight300}`}>A foaming cleanser that cleanse with the power of fruit acids</h3>
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
                    <img className={s.box__img} src={box__img_6} alt="product"/>
                    <img className={s.box__sticker} src={sticker} alt="img"/>
                </div>
                <div className={s.benefits}>
                    <h2 className={s.benefits__title}>Bounce Back Toner</h2>
                    <h3 className={`${s.benefits__subtitle} ${s.benefits__subtitle_Weight300}`}>A mineral-rich toner with Niacinamide that nourishes &#38; restores.</h3>
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
                    <img className={s.box__img} src={box__img_7} alt="product"/>
                </div>
                <div className={s.benefits}>
                    <h2 className={s.benefits__title}>Clean Slate Exfoliant</h2>
                    <h3 className={`${s.benefits__subtitle} ${s.benefits__subtitle_Weight300}`}>To clear Blackheads and Acne | For your Face & Body</h3>
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
                    <img className={s.box__img} src={box__img_8} alt="product"/>
                    <img className={s.box__sticker} src={sticker_2} alt="img"/>
                </div>
                <div className={s.benefits}>
                    <h2 className={s.benefits__title}>Eye Love You Eye Serum</h2>
                    <h3 className={`${s.benefits__subtitle} ${s.benefits__subtitle_Weight300}`}>A rollerball eye serum massager, for well-rested, fresh eyes</h3>
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
                    <img className={s.box__img} src={box__img_9} alt="product"/>
                </div>
                <div className={s.benefits}>
                    <h2 className={s.benefits__title}>Sunny Side Up SPF 30</h2>
                    <h3 className={s.benefits__subtitle}>Your invisible sunscreen that protects against UV & blue light damage
                    </h3>
                    <p className={s.benefits__price}><samp className={s.benefits__price_lineThrough}>USD 50</samp> USD 40 | 30ml
                    </p>
                    <div className={s.benefits__grade}>
                        <img className={s.grade__points} src={grade} alt="points"/>
                        <p className={s.grade__prestige}>100 Reviews</p>
                    </div>
                    <button className={s.button}>Add to cart</button>
                </div>
            </div>
        </div>
    </div>
}   
        export default SectionFour;