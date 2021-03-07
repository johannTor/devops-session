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