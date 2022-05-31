import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamelWithSpace } from "./App";

test("Initial conditions", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  const checkBox = screen.getByRole("checkbox", { name: "Disable" });
  expect(checkBox).not.toBeChecked();
});

test("Button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toHaveStyle({ color: "tomato" });
});

test("button turns blue when clicked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  //click button
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({
    color: "cornflowerblue",
    borderColor: "cornflowerblue",
  });

  expect(colorButton.textContent).toBe("Change to red");
});

test("Check box is checked on click", () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox", { name: "Disable" });
  fireEvent.click(checkBox);
  expect(checkBox).toBeChecked();
});

test("Button is disabled on when checkbox is clicked", () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox", { name: "Disable" });
  const button = screen.getByRole("button", { name: "Change to blue" });
  fireEvent.click(checkBox);
  expect(button).toBeDisabled();
});

test("Button is enabled when checkbox is clicked twice", () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox", { name: "Disable" });
  const button = screen.getByRole("button", { name: "Change to blue" });
  fireEvent.click(checkBox);
  expect(button).toBeDisabled();
  fireEvent.click(checkBox);
  expect(button).not.toBeDisabled();
});

test("Button is grey when disabled", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkBox = screen.getByRole("checkbox", { name: "Disable" });
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "lightGrey" });
});

describe("Test regex function", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpace("Red")).toBe("Red");
  });
  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpace("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpace("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
