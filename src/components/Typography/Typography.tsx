/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { GLOBAL_PREFIX } from '../../constants/prefix';
import { classNames } from '../../utils';

type Level = 1 | 2;
type Size = 'medium' | 'small';

export interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  level: Level;
  size: Size;
}

const Typography = ({ level, size, className, ...typographyProps }: TypographyProps) => {
  className = classNames([`${GLOBAL_PREFIX}-typography`, className]);

  return <p {...typographyProps} className={className} css={css([Weight[level], Style[size]])} />;
};

export default Typography;

const Weight: { [key in Level]: ReturnType<typeof css> } = {
  1: css({
    fontWeight: 500,
  }),
  2: css({
    fontWeight: 400,
  }),
};

const Style: { [key in Size]: ReturnType<typeof css> } = {
  medium: css({
    fontSize: 16,
    lineHeight: '24px',
  }),
  small: css({
    fontSize: 14,
    lineHeight: '22px',
  }),
};
