import React, { ReactNode } from 'react';
import { DefaultButtonStyle } from './styles';

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  type: "button" | "submit" | "reset"
}

const DefaultButton: React.FC<ButtonProps> = ({ onClick, children, type }) => {
  return (
    <DefaultButtonStyle type={type} onClick={onClick? onClick : () => {}}>
      {children}
    </DefaultButtonStyle>
  );
};

export default DefaultButton;