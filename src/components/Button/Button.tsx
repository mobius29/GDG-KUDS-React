/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { classNames } from '../../utils/classNames';
import { GLOBAL_PREFIX } from '../../constants/prefix';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ className, ...rest }: ButtonProps) => {
  return <button className={classNames([`${GLOBAL_PREFIX}-button`, className])} css={ButtonStyles} {...rest} />;
};

export default Button;

const ButtonStyles = css({
  backgroundColor: '#eeeeee',
});
