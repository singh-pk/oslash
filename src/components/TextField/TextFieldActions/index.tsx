import { memo } from 'react';

import type { FC } from 'react';
import type { TextFieldActionProps } from 'libs/interface';

import Show from 'hoc/Show';
import Button from 'components/Button';

import classes from './TextFieldActions.module.scss';

const TextFieldActions: FC<TextFieldActionProps> = ({
  variant,
  buttonProps,
  dropdownProps
}) => {
  return (
    <div className={classes[`actions--container--${variant}`]}>
      <Show when={!!dropdownProps}>
        <select className={classes.dropdown}>
          {dropdownProps?.options?.map(({ label, value }) => (
            <option key={label} value={value}>
              {label}
            </option>
          ))}
        </select>
      </Show>

      <Show when={!!buttonProps}>
        <Button className={classes.button} {...buttonProps}>
          {buttonProps!.label}
        </Button>
      </Show>
    </div>
  );
};

export default memo(TextFieldActions);
