import React from 'react';
import { StyleButton } from './ButtonStyle';

const ButtonIndex = ({ onClick, txt }) => {
  return <StyleButton onClick={onClick}>{txt}</StyleButton>;
};

export default ButtonIndex;
