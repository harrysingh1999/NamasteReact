const { render, screen, fireEvent } = require("@testing-library/react");
const { default: ContactUs } = require("../../ContactUs");
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

test("should Change Show Password Icon to Hide Password Icon inside Contact Component", () => {
  render(
    <BrowserRouter>
      <ContactUs />
    </BrowserRouter>
  );

  const showPassword = screen.getByText("👁️");
  fireEvent.click(showPassword);

  const hidePassword = screen.getByText("🔑");
  expect(hidePassword).toBeInTheDocument();
});
