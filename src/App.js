import React from "react";
import { useControlledValue } from "./hooks";
import WordFilter from "./components/WordFilter";

function App() {
  const [queryValue, handleQueryChange] = useControlledValue("");
  return (
    <div className="App">
      <h1 className="wordmark__h1">Scrabble Master</h1>
      <p className="submark__p">
        Be a master of Scrabble & look cool during family game night.
      </p>
      <input
        className="wordQuery__input"
        maxLength="9"
        placeholder="What letters do you have?"
        value={queryValue}
        onChange={handleQueryChange}
      />
      <h5>
        Wildcard tiles are allowed. Just use ? in place of your blank tile
        <span aria-label="This is a fire emoji" role="img">
          🔥
        </span>
      </h5>
      <WordFilter query={queryValue} />
    </div>
  );
}

export default App;
