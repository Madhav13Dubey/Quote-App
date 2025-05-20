import React from 'react';
import QuoteCard from './QuoteCard';

function QuoteList({ quotes, onAuthorClick }) {
  return (
    <div className="quote-container">
      {quotes.map((q) => (
        <QuoteCard key={q.id} quote={q} onAuthorClick={onAuthorClick} />
      ))}
    </div>
  );
}

export default QuoteList;
