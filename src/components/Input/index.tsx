import type { FC } from 'react';
import type { InputProps } from 'libs/interface';

import Show from 'hoc/Show';

import classes from './Input.module.scss';

const Input: FC<InputProps> = ({
  variant = 'primary',
  buttonTxt = '',
  ...props
}) => {
  return (
    <div className={classes.container}>
      <input className={classes[`input--${variant}`]} {...props} />

      <Show when={buttonTxt.length > 0}>
        <div className={classes[`actions--container--${variant}`]}>
          <button>{buttonTxt}</button>
        </div>
      </Show>
    </div>
  );
};

export default Input;
