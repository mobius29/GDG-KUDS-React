/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { classNames } from '../../utils/classNames';
import { GLOBAL_PREFIX } from '../../constants/prefix';
import { forwardRef } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  colorType?: 'primary' | 'blue' | 'green' | 'yellow' | 'red';
  size?: 'small' | 'medium' | 'large';
}

// TODO: Button 구현. 아래 주석 지우고 시작할 것!
const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  // eslint-disable-next-line
  const { icon, colorType, size, className, children, ...buttonProps } = props;
  const BUTTON_PREFIX = `${GLOBAL_PREFIX}-button`;

  return (
    <button
      ref={ref}
      className={classNames([BUTTON_PREFIX, `${BUTTON_PREFIX}-${colorType}`, className])}
      css={ButtonStyles}
      {...buttonProps}>
      {children}
    </button>
  );
});

export default Button;

const ButtonStyles = css({
  backgroundColor: '#eeeeee',
  '&:hover': {}, // hover style
  '&:active': {}, // click style
  '&:disabled': {}, // disabled style
});
