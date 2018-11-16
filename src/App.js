import React from 'react';
import { useControlledValue } from './hooks';
import WordFilter from './components/WordFilter';

function App() {
  const [queryValue, handleQueryChange] = useControlledValue('');
  return (
    <div className="App">
      <input
        className="wordQuery__input"
        maxLength="9"
        placeholder="What letters do you have?"
        value={queryValue}
        onChange={handleQueryChange}
      />
      <WordFilter query={queryValue} />
    </div>
  );
}

export default App;
