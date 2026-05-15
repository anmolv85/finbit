// File purpose: app\(main)\dashboard\layout.js
// This file is part of the Next.js application routes, pages, or layout and defines how the user interface and data are rendered.
// It is written to help beginners understand how this file connects to the rest of the app.

import React, { Suspense } from "react";
import DashboardPage from "./page";
import { BarLoader } from "react-spinners";

// DashBoardLayout: layout component that wraps pages and defines the shared structure for this route.
export default async function DashBoardLayout() {
  return (
    <div className="px-5">
      <h1 className="text-6xl font-bold gradient-title mb-5 w-fit">Dashboard</h1>

      {/* Dashboard content goes here */}
      <Suspense 
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ed" />}>
        <DashboardPage />
      </Suspense>
    </div>
  );
}
