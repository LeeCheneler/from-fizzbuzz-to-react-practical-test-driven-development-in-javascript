import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";
import { Counter } from "./counter";

it("should display the start count as 0", () => {
  const { getByTestId } = render(<Counter />);

  expect(getByTestId("count")).toHaveTextContent("Count: 0");
});

it("should increase the count by one when the user increments the count", () => {
  const { getByTestId, getByText } = render(<Counter />);

  fireEvent.click(getByText("Increment"));
  expect(getByTestId("count")).toHaveTextContent("Count: 1");

  fireEvent.click(getByText("Increment"));
  expect(getByTestId("count")).toHaveTextContent("Count: 2");
});
