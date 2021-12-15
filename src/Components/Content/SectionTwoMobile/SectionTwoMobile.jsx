import React from "react";
import icon_1 from "../../../Static/Img/row-promise__icon_1.svg";
import icon_2 from "../../../Static/Img/row-promise__icon_2.svg";
import icon_3 from "../../../Static/Img/row-promise__icon_3.svg";
import icon_4 from "../../../Static/Img/row-promise__icon_4.svg";
import icon_5 from "../../../Static/Img/row-promise__icon_5.svg";

import s from "./SectionTwoMobile.module.css";

const SectionTwoMobile = () => {
  return (
    <div className={s.sectionTwoMobile}>
      <div className={s.row}>
        <div className={s.rowPromise}>
          <div className={s.box}>
            <p className={s.title}>Our Promise</p>
            <div className={`${s.section} ${s.one}`}>
              <img className={s.icon} src={icon_1} alt="icon" />
              <p className={s.text}>
                100%
                <br />
                Clean
              </p>
            </div>
            <div className={`${s.section} ${s.two}`}>
              <img className={s.icon} src={icon_2} alt="icon" />
              <p className={s.text}>
                Cruelty
                <br />
                Free
              </p>
            </div>
            <div className={`${s.section} ${s.hree}`}>
              <img className={s.icon} src={icon_3} alt="icon" />
              <p className={s.text}>
                Free of
                <br />
                1400+ toxins
              </p>
            </div>
            <div className={`${s.section} ${s.hour}`}>
              <img className={s.icon} src={icon_4} alt="icon" />
              <p className={s.text}>
                Swiss
                <br />
                Made
              </p>
            </div>
            <div className={`${s.section} ${s.five}`}>
              <img className={s.icon} src={icon_5} alt="icon" />
              <p className={s.text}>
                Environmentally
                <br />
                Friendly
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionTwoMobile;
