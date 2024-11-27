/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { generateClasses } from '../../utils/classNames';
import { GLOBAL_PREFIX } from '../../constants/prefix';
import { forwardRef } from 'react';

type ColorType = 'primary' | 'blue' | 'green' | 'yellow' | 'red';
type Size = 'small' | 'medium' | 'large';
type Shape = 'circular' | 'rect';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  colorType?: ColorType;
  size?: Size;
  shape?: Shape;
  loading?: boolean;
  icon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    colorType = 'primary',
    size = 'medium',
    shape = 'rect',
    loading,
    icon,
    className,
    children,
    ...buttonProps
  } = props;
  const BUTTON_PREFIX = `${GLOBAL_PREFIX}-button`;
  const generateButtonCls = generateClasses(BUTTON_PREFIX);

  return (
    <button
      ref={ref}
      className={generateButtonCls([colorType, shape], className)}
      css={css(ButtonDefaultStyles, ButtonColorTypeStyles[colorType], ButtonSizeStyles[size])}
      {...buttonProps}>
      {icon && <span className={generateButtonCls(['icon'])}>{icon}</span>}
      <span className={generateButtonCls(['inner'])}>{children}</span>
      {
        loading && <span className={generateButtonCls(['icon', 'loading'])}>loading icon</span> // TODO: loading icon 추가
      }
    </button>
  );
});

export default Button;

const ButtonDefaultStyles = css({
  padding: '14px 20px',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const ButtonColorTypeStyles: { [key in ColorType]: ReturnType<typeof css> } = {
  primary: css({
    backgroundColor: '#eeeeee',
    '&:hover': {}, // hover style
    '&:active': {}, // click style
    '&:disabled': {}, // disabled style
  }),
  blue: css({
    backgroundColor: '#eeeeee',
    '&:hover': {}, // hover style
    '&:active': {}, // click style
    '&:disabled': {}, // disabled style
  }),
  green: css({
    backgroundColor: '#eeeeee',
    '&:hover': {}, // hover style
    '&:active': {}, // click style
    '&:disabled': {}, // disabled style
  }),
  yellow: css({
    backgroundColor: '#eeeeee',
    '&:hover': {}, // hover style
    '&:active': {}, // click style
    '&:disabled': {}, // disabled style
  }),
  red: css({
    backgroundColor: '#eeeeee',
    '&:hover': {}, // hover style
    '&:active': {}, // click style
    '&:disabled': {}, // disabled style
  }),
};

const ButtonSizeStyles: { [key in Size]: ReturnType<typeof css> } = {
  large: css({
    height: 48,
  }),
  medium: css({
    height: 48,
  }),
  small: css({
    height: 48,
  }),
};
