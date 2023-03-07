import React from "react";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center text-white">
      <h2 className="text-2xl mt-6 mb-6">This is my draft while studying:</h2>
      <ul className="text-yellow-400 text-lg">
        <li className="mb-2"> - React + TypeScript</li>
        <li className="mb-2"> - Tailwind CSS</li>
        <li className="mb-2"> - react-router-dom</li>{" "}
        <li className="mb-2"> - HTTP requests in React + TypeScript</li>
        <li> - used Fake Store API</li>
      </ul>
    </div>
  );
}
