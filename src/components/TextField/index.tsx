import type { FC } from 'react';
import type { TextFieldProps } from 'libs/interface';

import Show from 'hoc/Show';

import Tags from './Tags';
import TextFieldInput from './TextFieldInput';
import TextFieldActions from './TextFieldActions';

import classes from './TextField.module.scss';

const TextField: FC<TextFieldProps> = ({
  variant = 'primary',
  buttonProps,
  inputProps,
  dropdownProps,
  tags
}) => {
  return (
    <div className={classes[`container--${variant}`]}>
      <Show when={!!tags && tags.length > 0}>
        <Tags tags={tags!} />
      </Show>

      <TextFieldInput variant={variant} {...inputProps} />

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
