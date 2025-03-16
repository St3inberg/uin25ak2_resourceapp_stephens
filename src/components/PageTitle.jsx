import React, { useEffect } from "react";

function PageTitle({ title = "Default Title", className = "" }) {
  useEffect(() => {
    document.title = title; 
  }, [title]);

  return <h1 className={className}>{title}</h1>;
}

export default PageTitle;
