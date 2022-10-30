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

interface TextFieldProps {
  variant: 'primary' | 'secondary';
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  buttonProps?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { label: string };
  dropdownProps?: {
    options: {
      label: string;
      value: string | number | readonly string[] | undefined;
    }[];
  };
}

interface TextFieldActionProps extends Omit<TextFieldProps, 'inputProps'> {}

export type { ButtonProps, ShowProps, TextFieldProps, TextFieldActionProps };
