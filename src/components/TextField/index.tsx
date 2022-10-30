import type { FC } from 'react';
import type { TextFieldProps } from 'libs/interface';

import Show from 'hoc/Show';
import TextFieldActions from './TextFieldActions';

import classes from './TextField.module.scss';

const TextField: FC<TextFieldProps> = ({
  variant = 'primary',
  buttonProps,
  inputProps,
  dropdownProps
}) => {
  return (
    <div className={classes[`container--${variant}`]}>
      <input className={classes[`input--${variant}`]} {...inputProps} />

      <Show when={!!buttonProps || !!dropdownProps}>
        <TextFieldActions
          variant={variant}
          buttonProps={buttonProps}
          dropdownProps={dropdownProps}
        />
      </Show>
    </div>
  );
};

export default TextField;
