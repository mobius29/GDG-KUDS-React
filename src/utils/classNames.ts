export const classNames = (values: unknown[]): string => {
  return values
    .filter((value) => value)
    .map((value) => {
      if (typeof value === "string") return value;
      if (typeof value === "number") return value.toString();
      if (Array.isArray(value)) return classNames(value);

      // TODO: object가 들어오면?

      return "";
    })
    .join(" ");
};
