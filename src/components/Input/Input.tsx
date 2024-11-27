/** @jsxImportSource @emotion/react */
//없으면 css= 오류 - tsconfig? 수정해야함

import { css } from '@emotion/react';
import { generateClasses } from '../../utils/classNames';
import { GLOBAL_PREFIX } from '../../constants/prefix';
import { forwardRef } from 'react';

type InputType = 'primary' | 'password' | 'serve';
type Size = 'small' | 'medium';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputType?: InputType;
  customSize?: Size;
  label?: string;
  helpText?: string;
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { inputType = 'primary', className, children, ...inputProps } = props;
  const INPUT_PREFIX = `${GLOBAL_PREFIX}-input`;
  const generateInputCls = generateClasses(INPUT_PREFIX);

  return (
    <input ref={ref} className={generateInputCls([inputType], className)} css={InputStyles} {...inputProps}>
      {children}
    </input>
  );
});

export default Input;

const InputStyles = css({
  backgroundColor: '#eeeeee',
});
