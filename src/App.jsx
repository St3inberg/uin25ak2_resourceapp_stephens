import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Resources from "./components/Resources.jsx";


const categories = [
  { path: "/html", category: "html" },
  { path: "/css", category: "css" },
  { path: "/javascript", category: "javascript" },
  { path: "/react", category: "react" },
  { path: "/sanity", category: "headless-cms" },
];

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {categories.map(({ path, category }) => (
            <Route key={path} path={path} element={<Resources category={category} />} />
          ))}
          {/* Wildcard route for unmatched paths */}
          <Route path="*" element={<Resources category="html" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
