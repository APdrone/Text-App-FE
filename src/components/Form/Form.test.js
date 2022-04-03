import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Form Component", () => {
  it("renders input box", () => {
    render(<Form />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });
  it("renders submision button", () => {
    render(<Form />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
