import React from 'react';
  
function QuoteCard({ simpson }) {
  return (
    <div className="QuoteCard">
      <img
        src={simpson.image}
        alt={simpson.character}
      />
      <ul>
        <li>
          Name:{simpson.character}
        </li>
        <li>Citation: {simpson.quote}</li>
      </ul>
    </div>
  );
};
  
export default QuoteCard;