/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { generateClasses } from '../../utils/classNames';
import { GLOBAL_PREFIX } from '../../constants/prefix';
import { forwardRef } from 'react';
import { Colors } from '../../constants/colors';

type ColorType = 'primary' | 'blue' | 'green' | 'yellow' | 'red';
type Size = 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  colorType?: ColorType;
  size?: Size;
  loading?: boolean;
  icon?: React.ReactNode;
}

const BUTTON_PREFIX = `${GLOBAL_PREFIX}-btn`;

/**
 * TODO: 로딩 아이콘 추가
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { colorType, size, loading, icon, className, children, ...buttonProps } = props;
  const generateButtonCls = generateClasses(BUTTON_PREFIX);

  const buttonCls = generateButtonCls(
    [
      colorType,
      size,
      {
        'icon-only': !!icon && !children,
      },
    ],
    className,
  );

  return (
    <button
      ref={ref}
      className={`${BUTTON_PREFIX} ${buttonCls}`}
      css={ButtonStyle}
      onClick={(e) => {
        // loading 동안 클릭 이벤트 발생 안하도록
        if (loading) {
          e.preventDefault();
          return;
        }

        buttonProps.onClick?.(e);
      }}
      {...buttonProps}>
      {loading && <span className={generateButtonCls(['icon', 'loading-icon'])}>loading</span>}
      {!loading && icon && <span className={generateButtonCls(['icon'])}>{icon}</span>}
      {!loading && children && <span className={generateButtonCls(['inner'])}>{children}</span>}
    </button>
  );
});

export default Button;

const DefaultStyle = css({
  padding: '14px 20px',

  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,

  height: 48,

  backgroundColor: Colors.primary[800],
  color: Colors.primary[100],

  border: 'none',
  borderRadius: 300,

  transitionProperty: 'background-color, color',
  transitionDuration: '150ms',
  transitionTimingFunction: 'ease-in-out',

  cursor: 'pointer',

  '&:hover': {
    backgroundColor: Colors.primary[200],
    color: Colors.primary[800],
  },
  '&:active': {
    backgroundColor: Colors.primary[300],
    color: Colors.primary[800],
  },

  '&:disabled': {
    backgroundColor: Colors.primary[400],
    color: Colors.primary[100],

    cursor: 'not-allowed',
    '&:hover': {
      backgroundColor: Colors.primary[400],
      color: Colors.primary[100],
    },
    '&:active': {
      backgroundColor: Colors.primary[400],
      color: Colors.primary[100],
    },
  },
});

const ColorTypeStyle = css({
  [`&.${BUTTON_PREFIX}-blue`]: {
    backgroundColor: Colors.blue[500],
    color: Colors.primary[100],
    '&:hover': {
      backgroundColor: Colors.blue[100],
    },
    '&:active': {
      backgroundColor: Colors.blue[300],
    },
  },
  [`&.${BUTTON_PREFIX}-green`]: {
    backgroundColor: Colors.green[500],
    color: Colors.primary[100],
    '&:hover': {
      backgroundColor: Colors.green[100],
    },
    '&:active': {
      backgroundColor: Colors.green[300],
    },
  },
  [`&.${BUTTON_PREFIX}-yellow`]: {
    backgroundColor: Colors.yellow[500],
    color: Colors.primary[100],
    '&:hover': {
      backgroundColor: Colors.yellow[100],
    },
    '&:active': {
      backgroundColor: Colors.yellow[300],
    },
  },
  [`&.${BUTTON_PREFIX}-red`]: {
    backgroundColor: Colors.red[500],
    color: Colors.primary[100],
    '&:hover': {
      backgroundColor: Colors.red[100],
    },
    '&:active': {
      backgroundColor: Colors.red[300],
    },
  },
});

const SizeStyle = css({
  [`&.${BUTTON_PREFIX}:not(.${BUTTON_PREFIX}-icon-only)`]: {
    minWidth: 120,

    [`&.${BUTTON_PREFIX}-lg`]: {
      width: '100%',
    },
  },

  [`&.${BUTTON_PREFIX}-icon-only`]: {
    padding: 12,
    width: 48,

    span: {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',

      width: 24,
      height: 24,
    },

    [`&.${BUTTON_PREFIX}-lg`]: {
      padding: '12px 28px',
      width: 80,
    },
  },
});

const ButtonStyle = css(DefaultStyle, ColorTypeStyle, SizeStyle);
