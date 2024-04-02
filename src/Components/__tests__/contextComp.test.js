import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContextComp from "../ContextComp";

//describe function is not mandatory, it is basically used to Group our testing of a component.................
describe("test cases of ContextComp", () => {
  test("Should load Contact Us Component", () => {
    render(<ContextComp />);
    const heading = screen.getByRole("heading");
    // Assertion...............
    expect(heading).toBeInTheDocument();
  });

  test("Should load Button inside Context Component", () => {
    render(<ContextComp />);
    const button = screen.getByText("Change Score");
    // Assertion...............
    expect(button).toBeInTheDocument();
  });

  test("Should load input inside Context Component", () => {
    render(<ContextComp />);
    const input = screen.getByRole("textbox");
    // Assertion...............
    expect(input).toBeInTheDocument();
  });
});
