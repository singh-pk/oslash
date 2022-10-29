import type { FC } from 'react';
import type { ButtonProps } from 'libs/interface';

import Show from 'hoc/Show';

import classes from './Button.module.scss';

const Button: FC<ButtonProps> = ({ icon, children, ...props }) => {
  return (
    <button className={classes.button} {...props}>
      {children}

      <Show when={!!icon && icon.length > 0}>
        <img className={classes.buttonIcon} src={icon} alt='icon' />
      </Show>
    </button>
  );
};

export default Button;
