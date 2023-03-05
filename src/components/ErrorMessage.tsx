import React from "react";

interface ErorMessageProps {
  error: string;
}

export default function ErrorMessage({ error }: ErorMessageProps) {
  return <p className="text-center text-red-600 mt-8">{error}</p>;
}
