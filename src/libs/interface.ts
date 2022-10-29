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

export type { ButtonProps, ShowProps };
