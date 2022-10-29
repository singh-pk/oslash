import type { FC } from 'react';
import type { ShowProps } from 'libs/interface';

const Show: FC<ShowProps> = ({ when, children }) => {
  if (when) return children;

  return null;
};

export default Show;
