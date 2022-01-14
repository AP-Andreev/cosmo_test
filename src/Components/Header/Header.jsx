import React from 'react';
import logo from '../../Static/Img/lovefromyours-logo.png';
import cart from '../../Static/Img/cart.svg';
import s from './Header.module.css';

const Header = () => {
    return (
    <header className={s.header}>
        <div className={s.bar}>
            <div className={s.bar__wrap}>
                <p className={s.bar__text}>Swiss Standards of Quality &#38; Safety</p>
                <p className={s.bar__text}>High Performance, Clean &#38; Vegan </p>
                <p className={`${s.bar__text} ${s.bar__text_mobile}`}>Free Shipping above $50</p>
            </div>
        </div>
        <div className={s.header__content}>
            <button className={s.burger}> <span></span> </button>
            <ul className={s.paginationMobile}>
                <li>
                    <a href="#" className={s.pagination__text}>Shop</a>
                </li>
                <li>
                    <a href="#" className={s.pagination__text}>Reviews</a>
                </li>
                <li>
                    <a href="#" className={s.pagination__text}>Meet Us</a>
                </li>
                <li>
                    <a href="#" className={s.pagination__text}>Learn</a>
                </li>
            </ul>
            <ul className={s.pagination}>
                <li>
                    <a href="#" className={s.pagination__text}>Shop</a>
                </li>
                <li>
                    <a href="#" className={s.pagination__text}>Reviews</a>
                </li>
                <li>
                    <a href="#" className={s.pagination__text}>Meet Us</a>
                </li>
                <li>
                    <a href="#" className={s.pagination__text}>Learn</a>
                </li>
            </ul>
            <img className={s.logo} src={logo} alt="logo"/>
            <div className={s.user}>
                <a href="#" className={s.user__button}>Build Your Routine</a>
                <a href="#" className={s.user__avatar}>N</a>
                <button className={s.cart}> <img className={s.cart__img} src={cart} alt="cart"/> </button>
            </div>
        </div>
        <div className={s.line}></div>
    </header>
)}

export default Header;