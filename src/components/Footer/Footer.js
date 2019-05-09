import React from 'react';
import s from './Footer.module.scss';

function Footer() {
  return (
    <React.Fragment>
      <div className={s.line}></div>
      <div className={s.wrapper}></div>
      <div className={s.container}></div>
      <div className={s.text}>Copyright © 2017. Privacy Policy.</div>
    </React.Fragment>
  );
};

export default Footer;