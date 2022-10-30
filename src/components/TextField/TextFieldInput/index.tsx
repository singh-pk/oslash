import type { FC } from 'react';
import type { TextFieldInputProps } from 'libs/interface';

import classes from './TextFieldInput.module.scss';

const TextFieldInput: FC<TextFieldInputProps> = ({ variant, ...props }) => {
  return <input className={classes[`input--${variant}`]} {...props} />;
};

export default TextFieldInput;
