"use strict";

const quotes = [
"To be, or not to be, that is the question. - William Shakespeare",
"I have a dream. Martin Luther King Jr.",
"The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
"Life is like a box of chocolates. - Forrest Gump",
"An unexamined life is not worth living. - Socrates" ];

function getRandomQuote() {
  if (quotes.length === 0) {
    return "No quotes available.";
  } else {
    const quotesIndex = Math.floor(Math.random() * quotes.length);
    return quotes[quotesIndex];
  }
}

const displayQuoteBtn = document.querySelector("#displayQuoteBtn");
const quotesElement = document.querySelector("#quotes");

displayQuoteBtn.addEventListener("click", () => {
  const randomQuote = getRandomQuote();
  quotesElement.textContent = randomQuote;
});
