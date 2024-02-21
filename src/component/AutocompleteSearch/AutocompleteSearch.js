import React, { useState } from "react";
import data from "../../Data.json"; // Importing book data
import styles from "./AutocompleteSearch.module.css";

const AutocompleteSearch = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [searchResults, setSearchResults] = useState([]); // State for search results
  const [bookDetails, setBookDetails] = useState(null); // State for selected book details
  const [addedCards, setAddedCards] = useState([]); // State for added cards
  let debounceTimer; // Timer for debounce functionality
  const debounceDelay = 300; // Delay time for debounce

  // Handler for search input change
  const handleChange = (event) => {
    const { value } = event.target;
    clearTimeout(debounceTimer); // Clear existing timer
    setSearchTerm(value); // Update search term
    debounceTimer = setTimeout(() => {
      performSearch(value); // Perform search after debounce delay
    }, debounceDelay);
  };

  // Function to perform search
  const performSearch = (value) => {
    if (value.trim() === "") {
      setSearchResults([]);
      return;
    }
    const filteredResults = data.summaries
      .filter((summaryObj) =>
        summaryObj.summary.toLowerCase().includes(value.toLowerCase())
      )
      .map((summaryObj) => {
        const id = data.summaries.indexOf(summaryObj);
        return {
          id,
          title: data.titles[id],
          occurrences: countOccurrences(summaryObj.summary, value),
        };
      })
      .sort((a, b) => b.occurrences - a.occurrences);

    setSearchResults(filteredResults); // Update search results
  };

  // Handler for selecting a search result
  const handleSubmit = (index) => {
    if (index >= 0 && index < searchResults.length) {
      const selectedItem = searchResults[index];
      const { id } = selectedItem;
      const title = data.titles[id];
      const summary = data.summaries[id].summary;
      const author =
        data.authors.find((author) => author.book_id === id)?.author ||
        "Unknown";
      setBookDetails({ id, title, summary, author }); // Set selected book details
    }
  };

  // Handler for adding a card
  const handleAddCard = () => {
    if (bookDetails) {
      const exists = addedCards.some((card) => card.id === bookDetails.id);
      if (exists) {
        alert("Card already added!");
      } else {
        setAddedCards((prevCards) => [...prevCards, bookDetails]); // Add book to added cards
      }
      setSearchResults([]);
      setSearchTerm("");
      setBookDetails(null); // Reset search and book details
    }
  };

  // Function to count occurrences of a substring in a string
  const countOccurrences = (string, subString) => {
    return string.split(subString.toLowerCase()).length - 1;
  };

  return (
    <div className={styles.child_container} data-testid="autocomplete-search">
      <div className={styles.autocomplete_container}>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles.search_div_config}>
            <label></label>
            <input
              type="text"
              value={searchTerm}
              onChange={handleChange}
              placeholder="Search here ..."
              className={styles.input_config}
              data-testid="testid"
            />
          </div>
        </form>
        <div className={styles.search_results} data-testid="search-results">
          {searchResults.map((item, index) => (
            <label
              key={item.id}
              onClick={() => handleSubmit(index)}
              role="label"
              data-testid={`search-results-label-0`} // Add data-testid attribute
            >
              {item.title}
            </label>
          ))}
        </div>
        {bookDetails && (
          <div className={styles.form_div_config}>
            <h2>{bookDetails.title}</h2>
            <label>{bookDetails.summary}</label>
            <p>Author: {bookDetails.author}</p>
            <button onClick={handleAddCard} className={styles.btn_config}>
              Add Card
            </button>
          </div>
        )}
        <div className={styles.added_cards_container}>
          {addedCards.map((card, index) => (
            <div key={index} className={`${styles.card} ${styles.zoom_effect}`}>
              <h2 className={styles.added_cards_container_text}>
                {card.title}
              </h2>
              <p>{card.summary}</p>
              <p className={styles.added_cards_container_text}>
                Author: {card.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutocompleteSearch;
