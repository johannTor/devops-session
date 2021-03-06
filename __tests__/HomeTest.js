import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../pages/index";

test("Check for added text", () => {
  const { getByText } = render(<Home />);
  expect(getByText("Added title...")).toBeInTheDocument();
});

it("Renders appropriately", () => {
  render(<Home />);
  expect(
    screen.getByRole("heading", { name: "Welcome to frontpage" })
  ).toBeInTheDocument();
});