import React from 'react';
import { theme as globalTheme } from '@/styles';

const INPUT_THEME = globalTheme.INPUT;

export interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  theme?: 'default';
}

export const Input: React.FC<InputProps> = ({ theme, ...props }) => {
  const inputTheme = React.useMemo(() => {
    return {};
  }, [theme]);

  return <input {...props} />;
};
