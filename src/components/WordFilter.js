import React, { useState } from 'react';
import PropTypes from 'prop-types';
import wordList from '../lib/dictionary.json';
import { scoreWord, onlyTheseLetters } from '../lib/utilities.js';

function filterWordList(query) {
  const re = new RegExp(`[${query}]`, 'i');
  return wordList
        .filter(word => word.length <= (query.length))
        .filter(word => query.split('').every(letter => word.includes(letter)))
        .filter(word => onlyTheseLetters(query, word))
        .sort((a, b) => scoreWord(b) - scoreWord(a))
        .splice(0, 50)
        .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)} (${scoreWord(word)})`)
}

function WordFilter({ query }) {
  const words = filterWordList(query);
    return (
        <div className="words__container">
            {query
                ? filterWordList(query).map(word => <div className="word__item" key={word}>{word}</div>)
                : null
            }
        </div>
    );
}

WordFilter.propTypes = {
  query: PropTypes.string
};

WordFilter.defaultProps = {
  query: ''
};

export default WordFilter;
