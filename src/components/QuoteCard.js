import React from 'react';
import './QuoteCard.css';

function QuoteCard({ quote, onAuthorClick }) {
  return (
    <div className="card">
      <p className="quote-text">❝ {quote.quote} ❞</p>
      <p className="author" onClick={() => onAuthorClick(quote.author)}>
        - {quote.author}
      </p>
    </div>
  );
}

export default QuoteCard;
