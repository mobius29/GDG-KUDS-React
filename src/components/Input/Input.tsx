/** @jsxImportSource @emotion/react */
//없으면 css= 오류 - tsconfig? 수정해야함

import { css } from '@emotion/react';
import { generateClasses } from '../../utils/classNames';
import { GLOBAL_PREFIX } from '../../constants/prefix';
import { forwardRef } from 'react';
import { Colors } from '../../constants/colors';

type ColorType = 'primary'; //colorType 별도 명시
type InputType = 'text' | 'password'; //input 태그에 존재하나, 현재 text, password 외에는 추가된 것이 없어 그대로 가져가기로
type Size = 'small' | 'medium';
type Status = 'default' | 'success' | 'error';

type InputAttribute = React.InputHTMLAttributes<HTMLInputElement>;
export interface InputProps extends Omit<InputAttribute, 'size'> {
  colorType?: ColorType;
  inputType?: InputType;
  size?: Size;
  label?: React.ReactNode;
  helpText?: React.ReactNode;
  placeholder?: string;
  status?: Status;
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    colorType,
    inputType = 'text',
    size = 'small',
    label,
    helpText,
    status = 'default',
    className,
    icon,
    ...inputProps
  } = props;
  const INPUT_PREFIX = `${GLOBAL_PREFIX}-input`;
  const generateInputCls = generateClasses(INPUT_PREFIX);

  return (
    <div css={ContainerStyles} className={generateInputCls([colorType, inputType, size], className)}>
      {label && (
        <label css={InputLabelStyles} className={generateInputCls([label])}>
          {label}
        </label>
      )}
      <div css={InputWrapperStyles}>
        <input
          ref={ref}
          type={inputType}
          css={[InputDefaultStyles, InputSizeStyles[size], InputStatusStyles[status]]}
          {...inputProps}
        />
        {icon && <span css={[InputIconStyles]}>{icon}</span>}
        {/* success icon, error icon 추가 */}
      </div>

      {helpText && (
        <p css={[InputHelpTextSyles, InputStatusHelpTextStyles[status]]} className={generateInputCls([helpText])}>
          {helpText}
        </p>
      )}
    </div>
  );
});

export default Input;

const ContainerStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  width: '100%',
});

const InputWrapperStyles = css({
  position: 'relative',
}); // icon 적용 이후 수정 예정

const InputLabelStyles = css({
  fontSize: 12,
  fontWeight: 500,
  color: Colors.primary[800],
  marginBottom: 2, //피그마 기반 수정
});

const InputHelpTextSyles = css({
  fontSize: 10,
  fontWeight: 300,
  marginTop: 5, //피그마 기반 수정
});

const InputDefaultStyles = css({
  padding: '10px 20px',
  fontsize: 14,

  display: 'inline-flex',
  alignItems: 'center',

  border: '1.2px solid',
  borderRadius: 8,
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
  }, //input disabled
});

const InputSizeStyles: { [key in Size]: ReturnType<typeof css> } = {
  small: css({
    width: 200,
    height: 14,
  }),
  medium: css({
    width: 260,
    height: 24,
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

//icon scss로 수정 아이콘에 className을 만들어서 바로 적용
//추후 icon 전체 업데이트
const InputIconStyles = css({
  position: 'absolute',
  right: 10,
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
});
