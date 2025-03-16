import React, { useMemo } from "react";
import resources from "../ressurser";
import PageTitle from "./PageTitle";

const Resources = ({ category, noResourcesMessage = "Ingen ressurser funnet for denne kategorien." }) => {
  
  
  const filteredResources = useMemo(() => 
    resources.filter(resource => resource.category.toLowerCase() === category.toLowerCase()), 
    [category]
  );

  return (
    <div>
      <PageTitle title={`${category.toUpperCase()} Ressurser`} />
      {filteredResources.length > 0 ? (
        <ul className="source-list">
          {filteredResources.map((res) => (
            <li key={res.url}> {}
              <a href={res.url} target="_blank" rel="noopener noreferrer">
                {res.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>{noResourcesMessage}</p>
      )}
    </div>
  );
};

export default Resources;
