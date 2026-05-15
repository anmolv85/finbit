// File purpose: app\(main)\layout.js
// This file is part of the Next.js application routes, pages, or layout and defines how the user interface and data are rendered.
// It is written to help beginners understand how this file connects to the rest of the app.

import React from "react";

// MainLayout: layout component that wraps pages and defines the shared structure for this route.
const MainLayout = ({ children }) => {
  return (
    <div className="container mx-auto">
      {children}
    </div>
  );
};

export default MainLayout
