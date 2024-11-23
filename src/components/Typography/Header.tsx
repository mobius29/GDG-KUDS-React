/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { GLOBAL_PREFIX } from '../../constants/prefix';
import { classNames } from '../../utils';

type Level = 1 | 2 | 3 | 4 | 5;

export interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: Level;
}

const Header = ({ level, className, ...headingProps }: HeaderProps) => {
  className = classNames([`${GLOBAL_PREFIX}-header`, className]);

  return jsx(HeadingLevels[level], {
    ...headingProps,
    className,
    css: HeaderStyle[level],
  });
};

export default Header;

const HeadingLevels = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
} as const;

const HeaderStyle: { [key in Level]: ReturnType<typeof css> } = {
  1: css({
    fontSize: 56,
    lineHeight: '64px',
  }),
  2: css({
    fontSize: 40,
    lineHeight: '52px',
  }),
  3: css({
    fontSize: 32,
    lineHeight: '44px',
  }),
  4: css({
    fontSize: 24,
    lineHeight: '34px',
  }),
  5: css({
    fontSize: 20,
    lineHeight: '28px',
  }),
};
