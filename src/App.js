import "./App.css";
import Header from "./component/header/Header";
import AutocompleteSearch from "./component/AutocompleteSearch/AutocompleteSearch";

function App() {
  return (
    <>
      <Header /> {/* Render header component */}
      <div className="app-container">
        <AutocompleteSearch /> {/* Render AutocompleteSearch component */}
      </div>
    </>
  );
}

export default App;
