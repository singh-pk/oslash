import type { ReactElement } from 'react';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon?: string;
}

interface ShowProps {
  when: boolean;
  children: ReactElement;
}

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant: 'primary' | 'secondary';
  buttonTxt?: string;
}

export type { ButtonProps, ShowProps, InputProps };
