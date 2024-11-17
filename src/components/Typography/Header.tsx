/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { GLOBAL_PREFIX } from "../../constants/prefix";
import { classNames } from "../../utils";

type Level = 1 | 2 | 3 | 4 | 5;

export interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: Level;
}

const Header = ({ level, className, ...headingProps }: HeaderProps) => {
  className = classNames([`${GLOBAL_PREFIX}-header`, className]);

  if (level === 1) {
    return (
      <h1 {...headingProps} className={className} css={HeaderStyle[level]} />
    );
  }

  return React.createElement(HeadingLevels[level], {
    ...headingProps,
    className: `${GLOBAL_PREFIX}-header`,
    css: HeaderStyle[level],
  });
};

export default Header;

const HeadingLevels = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
} as const;

const HeaderStyle: { [key in Level]: ReturnType<typeof css> } = {
  1: css({
    fontSize: 56,
    lineHeight: "64px",
  }),
  2: css(),
  3: css(),
  4: css(),
  5: css(),
};
