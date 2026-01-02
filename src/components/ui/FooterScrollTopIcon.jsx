
import React from 'react';

const FooterScrollTopIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 86} height={props.height || 86} viewBox="0 0 86 86" fill="none" {...props}>
    <defs>
      <linearGradient id="footerUpGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#4fc3f7"/>
        <stop offset="100%" stopColor="#7b8cff"/>
      </linearGradient>
    </defs>
    <circle cx="43" cy="43" r="43" fill="url(#footerUpGrad)"/>
    <path d="M43 60V26M43 26L32 37M43 26l11 11" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default FooterScrollTopIcon;
