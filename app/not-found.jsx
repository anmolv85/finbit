import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute w-72 h-72 bg-indigo-500 opacity-20 blur-3xl rounded-full top-10 left-10" />
      <div className="absolute w-72 h-72 bg-cyan-500 opacity-20 blur-3xl rounded-full bottom-10 right-10" />

     {/* 🔄 Circular Loader */}
      <div className="mb-6">
        <div className="w-12 h-12 border-4 border-gray-600 border-t-cyan-400 rounded-full animate-spin"></div>
      </div>

      {/* 404 */}
      <h1 className="text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
        404
      </h1>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-400 mt-3 max-w-md">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      {/* Button */}
      <Link href="/">
        <Button className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/40">
          Return Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;