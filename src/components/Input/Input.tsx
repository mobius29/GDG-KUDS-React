/** @jsxImportSource @emotion/react */
//없으면 css= 오류 - tsconfig? 수정해야함

import { css } from '@emotion/react';
import { generateClasses } from '../../utils/classNames';
import { GLOBAL_PREFIX } from '../../constants/prefix';
import { forwardRef } from 'react';
import { Colors } from '../../constants/colors';

type InputType = 'primary' | 'password';
type Size = 'small' | 'medium';
type Status = 'default' | 'success' | 'error';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputType?: InputType;
  customSize?: Size;
  label?: string;
  helpText?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  status?: Status;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    inputType = 'primary',
    customSize = 'small',
    label = '',
    helpText = '',
    placeholder = '',
    status = 'default',
    disabled,
    icon,
    className,
    ...inputProps
  } = props;
  const INPUT_PREFIX = `${GLOBAL_PREFIX}-input`;
  const generateInputCls = generateClasses(INPUT_PREFIX);

  return (
    <div
      css={ContainerStyles}
      className={generateInputCls(
        [inputType, customSize, label === '' ? '' : 'label', helpText === '' ? '' : 'help-text'],
        className,
      )}>
      {/*class=gdg-kuds-input-primary gdg-kuds-input-small으로 붙는데 의도된 것인가 */}
      {label && <label css={InputLabelStyles}>{label}</label>}
      <div>
        <input
          ref={ref}
          css={[InputDefaultStyles, InputSizeStyles[customSize], InputStatusStyles[status]]}
          type={inputType === 'password' ? 'password' : 'primary'}
          placeholder={placeholder}
          disabled={disabled}
          {...inputProps}
        />
        {icon && <span>{icon}</span>}
        {status === 'success' && <span className={generateInputCls(['success'])}>{icon}</span>}
        {status === 'error' && <span className={generateInputCls(['error'])}>{icon}</span>}
        {/* success icon, error icon 추가 */}
      </div>

      {helpText && <p css={[InputHelpTextSyles, InputStatusHelpTextStyles[status]]}>{helpText}</p>}
    </div>
  );
});

export default Input;

const ContainerStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  width: '100%',
});

const InputLabelStyles = css({
  fontSize: '12px',
  fontWeight: 500,
  color: Colors.primary[800],
  marginBottom: '2px', //피그마 기반 수정
});

const InputHelpTextSyles = css({
  fontSize: '10px',
  fontWeight: 300,
  marginTop: '5px', //피그마 기반 수정
});

const InputDefaultStyles = css({
  padding: '10px 20px',
  fontsize: '14px',

  display: 'flex',
  alignItems: 'center',

  border: '1.2px solid',
  borderRadius: '8px',
  backgroundColor: Colors.primary[100],

  cursor: 'text',

  '&:focus': {
    outline: 'none',
    color: Colors.primary[800],
    borderColor: Colors.primary[800],
  }, //input focus

  '&:disabled': {
    backgroundColor: Colors.primary[200],
    borderColor: Colors.primary[300],

    cursor: 'not-allowed',
  }, //primary disabled
});

const InputSizeStyles: { [key in Size]: ReturnType<typeof css> } = {
  small: css({
    width: '200px',
    height: '14px',
  }),
  medium: css({
    width: '260px',
    height: '24px',
  }),
};

// Serve Type으로 제시된 부분을 Status로 관리
const InputStatusStyles: { [key in Status]: ReturnType<typeof css> } = {
  default: css({
    borderColor: Colors.primary[500],
  }),
  success: css({
    borderColor: Colors.green[500],
  }),
  error: css({
    color: Colors.red[500],
  }),
};

const InputStatusHelpTextStyles: { [key in Status]: ReturnType<typeof css> } = {
  default: css({
    color: Colors.primary[700],
  }),
  success: css({
    color: Colors.green[500],
  }),
  error: css({
    color: Colors.red[500],
  }),
};
