import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="h-screen bg-amber-500 flex items-center justify-center">
        <div>
          <h3 className="text-[140px] font-extrabold uppercase tracking-tighter text-amber-600">
            404 Not Found
          </h3>
          <div className="flex gap-4 text-xl font-bold flex items-center justify-center">
            <Link to="/" className="px-6 py-3 rounded-full bg-amber-400">
              Home
            </Link>
            <a href="/" className="px-6 py-3 rounded-full bg-amber-400">
              Home from a
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
