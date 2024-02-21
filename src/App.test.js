import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders AutocompleteSearch component", () => {
  render(<App />);
  const autocompleteSearchElement = screen.getByTestId("autocomplete-search");
  expect(autocompleteSearchElement).toBeInTheDocument();
});
