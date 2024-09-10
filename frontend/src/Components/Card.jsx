import React from 'react';
const Card = ({ imageUrl, description, linkUrl, linkText }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={imageUrl} alt="Card" />
      <div className="p-6">
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default Card;
