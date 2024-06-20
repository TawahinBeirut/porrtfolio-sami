import React from 'react';

export default function Project({ title, githubLink, description, presImage }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full h-48 object-contain p-2" src={presImage} alt={`${title} Presentation`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}
