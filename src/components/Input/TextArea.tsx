/** @jsxImportSource @emotion/react */
//없으면 css= 오류 - tsconfig? 수정해야함

import { css } from '@emotion/react';
import { generateClasses } from '../../utils/classNames';
import { GLOBAL_PREFIX } from '../../constants/prefix';
import { forwardRef } from 'react';
import { Colors } from '../../constants/colors';

type Size = 'large';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: Size;
  label?: React.ReactNode;
  placeholder?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const { size = 'large', label, className, ...textAreaProps } = props;
  const INPUT_PREFIX = `${GLOBAL_PREFIX}-textarea`;
  const generateTextAreaCls = generateClasses(INPUT_PREFIX);

  return (
    <div className={generateTextAreaCls([size], className)}>
      {label && (
        <label css={InputLabelStyles} className={generateTextAreaCls([label])}>
          {label}
        </label>
      )}
      <textarea ref={ref} css={[]} {...textAreaProps}></textarea>
    </div>
  );
});

export default TextArea;

const InputLabelStyles = css({
  fontSize: 12,
  fontWeight: 500,
  color: Colors.primary[800],
  marginBottom: 2, //피그마 기반 수정
});
