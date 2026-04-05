import React, { Suspense } from "react";
import DashboardPage from "./page";
import { BarLoader } from "react-spinners";

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
