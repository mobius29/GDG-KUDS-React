import { render, screen } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";

test("Button Test", () => {
  render(<Button className="button-test">Test-Button</Button>);
  const buttonEl = screen.getByText("Test-Button");

  expect(buttonEl).toBeInTheDocument();
});
