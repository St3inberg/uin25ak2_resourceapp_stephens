// src/components/Resources.jsx
import React from 'react';
import resources from '../ressurser';
import PageTitle from './PageTitle';

const Resources = ({ category }) => {
  // Filtrer ressursene (bruk lowercase for robust sammenligning)
  const filteredResources = resources.filter(
    resource => resource.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div>
      <PageTitle title={`${category.toUpperCase()} Ressurser`} />
      {filteredResources.length > 0 ? (
        <ul className="source-list">
          {filteredResources.map((res, index) => (
            <li key={index}>
              <a href={res.url} target="_blank" rel="noopener noreferrer">
                {res.name}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Ingen ressurser funnet for denne kategorien.</p>
      )}
    </div>
  );
};

export default Resources;
