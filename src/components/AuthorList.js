import React from 'react';
import './AuthorList.css';

function AuthorList({ authors, onAuthorClick }) {
  return (
    <div className="author-list">
      {authors.map((author) => (
        <button
          key={author}
          className="author-button"
          onClick={() => onAuthorClick(author)}
        >
          {author}
        </button>
      ))}
    </div>
  );
}

export default AuthorList;
