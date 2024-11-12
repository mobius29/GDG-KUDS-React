/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { classNames } from "../../utils/classNames";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

// TODO: 전역적으로 설정. 후에 ConfigProvider 등을 통해 외부에서 값을 바꿀 수 있도록?
const global_prefix = "gdg-kuds";

const Button = ({ className, ...rest }: ButtonProps) => {
  return (
    <button
      className={classNames([`${global_prefix}-button`, className])}
      css={ButtonStyles}
      {...rest}
    />
  );
};

export default Button;

const ButtonStyles = css({
  backgroundColor: "#eeeeee",
});
