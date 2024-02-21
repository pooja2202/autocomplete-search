import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AutocompleteSearch from "./AutocompleteSearch";

test("renders autocomplete search component", () => {
  render(<AutocompleteSearch />);
  const autocompleteSearchElement = screen.getByTestId("autocomplete-search");
  expect(autocompleteSearchElement).toBeInTheDocument();
});

test("search results are displayed correctly on typing", async () => {
  render(<AutocompleteSearch />);
  const inputElement = screen.getByPlaceholderText("Search here ...");

  // Simulate typing in the search input
  fireEvent.change(inputElement, { target: { value: "history" } });

  // Wait for the search results to be updated
  await waitFor(() => {
    // Use the correct query for your search results' structure
    const searchResults = screen.getAllByText(
      /Guns, Germs, and Steel|On the Shortness of Life/i
    );

    // Check if search results contain the expected titles
    expect(searchResults).toHaveLength(2); // Expect two results for "history"
  });
});
