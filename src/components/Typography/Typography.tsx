export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const Typography = ({ ...props }: TypographyProps) => {
  return <p {...props} />;
};

export default Typography;
