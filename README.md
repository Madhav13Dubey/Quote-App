# 📚 Quote Browsing React App

This is an interactive quote browsing application built with **ReactJS**. Users can browse quotes by different authors, view all quotes by a specific author, and navigate using a simple and clean UI.

## 🚀 Features

- 🔸 **Home Page** — Welcome screen with an introduction.
- 🔸 **Author View** — Displays a list of all authors retrieved from an API. Each author's name is clickable.
- 🔸 **Quote View** — Shows one quote from each author initially.
- 🔸 **Author-Specific Quotes** — Clicking an author or quote shows all quotes by that author.
- 🔸 Clean navigation using a custom **Navbar** component.

## 🛠️ Tech Stack

- ReactJS
- HTML & CSS
- JavaScript (ES6+)
- Dummy JSON Quotes API




## 🌐 API Used

Quotes are fetched from:  
**https://dummyjson.com/quotes?limit=1454**

## 📁 Folder Structure

```plain text

quote_app/
├── public/
├── src/
│ ├── components/
│ │ ├── Navbar.js
│ │ ├── AuthorList.js
│ │ ├── QuoteCard.js
│ │ ├── QuoteList.js
│ │ └── *.css
│ ├── App.js
│ ├── App.css
│ └── index.js
├── package.json
└── README.md
