import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import AuthorList from './components/AuthorList';
import QuoteList from './components/QuoteList';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [filteredQuotes, setFilteredQuotes] = useState([]);
  const [currentPage, setCurrentPage] = useState('home'); 

  
  useEffect(() => {
    fetch('https://dummyjson.com/quotes?limit=1454')
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.quotes);
        const uniqueAuthors = Array.from(new Set(data.quotes.map((q) => q.author)));
        setAuthors(uniqueAuthors);
      });
  }, []);

  const handleAuthorClick = (author) => {
    setSelectedAuthor(author);
    setFilteredQuotes(quotes.filter((q) => q.author === author));
    setCurrentPage('authorQuotes');
  };

  const resetView = () => {
    setSelectedAuthor(null);
    setFilteredQuotes([]);
    setCurrentPage('home');
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setSelectedAuthor(null);
    setFilteredQuotes([]);
  };

  const getFirstQuotes = () => {
    const firstQuotesMap = {};
    quotes.forEach((quote) => {
      if (!firstQuotesMap[quote.author]) {
        firstQuotesMap[quote.author] = quote;
      }
    });
    return Object.values(firstQuotesMap);
  };

  // applying paging effect //
  return (
    <div className="app">
      <Navbar onNavigate={handleNavigation} onHomeClick={resetView}/>

      {currentPage === 'home' && (
        <div className="welcome-msg">
          <h1>Welcome to my Quote Browsing Project</h1>
          <p>Click on the navigation bar provided by the links to explore authors and quotes by authors.</p>
        </div>
      )}

      {currentPage === 'authors' && (
        <>
          <div className="instructions"><h3>Click on an author to see their respective quotes</h3></div>
          <AuthorList authors={authors} onAuthorClick={handleAuthorClick} />
        </>
      )}

      {currentPage === 'authorQuotes' && selectedAuthor && (
        <>
          <div className="author-msg">
            Showing quotes by <strong>{selectedAuthor}</strong>
          </div>
          <QuoteList quotes={filteredQuotes} onAuthorClick={handleAuthorClick} />
        </>
      )}

      {currentPage === 'quotes' && (
        <>
          <div className="instructions">Displaying one quote per author</div>
          <QuoteList quotes={getFirstQuotes()} onAuthorClick={handleAuthorClick} />
        </>
      )}
    </div>
  );
}

export default App;


