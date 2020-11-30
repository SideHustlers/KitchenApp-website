import React from 'react';

export const RoundCheckMark = ({
  fill = '#D48E9B',
  width = '24',
  className = 'checkmark-icon',
  height = '24',
  style
}) => 
  <svg width={width} style={style} height={height} xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill={fill} clip-rule="evenodd">
    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z"/>
  </svg>;