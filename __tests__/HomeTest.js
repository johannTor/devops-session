import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../pages/index";

// Test that asserts that there's a heading with a specific text present in the Home component
it("Renders appropriately", () => {
  render(<Home />);
  expect(
    screen.getByRole("heading", { name: "Welcome to frontpage" })
  ).toBeInTheDocument();
});

// Test that asserts that the text 'Added title...' is present in the Home component
test("Check for added text", () => {
  const { getByText } = render(<Home />);
  expect(getByText("Continous deployment example")).toBeInTheDocument();
});