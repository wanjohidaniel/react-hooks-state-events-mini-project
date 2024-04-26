import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../components/CategoryFilter";
import { CATEGORIES } from "../data";

test("displays a button for each category", () => {
  render(<CategoryFilter categories={CATEGORIES} />);
  for (const category of CATEGORIES) {
    expect(screen.getByText(category)).toBeInTheDocument();
  }
});

test("clicking the category button adds a class of 'selected' to the button", () => {
  render(<CategoryFilter categories={CATEGORIES} />);

  const codeButton = screen.getByRole("button", { name: "Code" });
  const allButton = screen.getByRole("button", { name: "All" });

  fireEvent.click(codeButton);

  expect(codeButton).toHaveClass("selected");
  expect(allButton).not.toHaveClass("selected");
});

test("clicking the category button filters the task list", () => {
  // You need to mock onSelectCategory function here and assert its behavior
});

test("displays all tasks when the 'All' button is clicked", () => {
  // You need to mock onSelectCategory function here and assert its behavior
});
