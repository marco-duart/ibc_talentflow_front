import React, { ReactNode } from 'react';
import { DefaultCardStyle } from './styles';

interface CardProps {
  children: ReactNode;
}

const DefaultCard: React.FC<CardProps> = ({children}) => {
  return (
    <DefaultCardStyle>
      {children}
    </DefaultCardStyle>
  );
};

export default DefaultCard;