import type { FC } from 'react';
import type { TagsProps } from 'libs/interface';

import { memo } from 'react';

import { ReactComponent as RemoveIcon } from 'assets/Remove.svg';

import classes from './Tags.module.scss';

const Tags: FC<TagsProps> = ({ tags }) => {
  return (
    <div className={classes.tags}>
      {tags.map(d => (
        <div key={d} className={classes.tag}>
          <span>{d}</span>
          <RemoveIcon className={classes.icon} />
        </div>
      ))}
    </div>
  );
};

export default memo(Tags);
