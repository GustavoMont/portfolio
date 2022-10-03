import React from "react";

export default function Spin() {
  return (
    <div className="flex justify-center items-center">
      <div
        className="spinner-border border-black border-l-primary animate-spin inline-block w-6 h-6 border-4 rounded-full"
        role="status"
      >
        <span className="hidden">Loading...</span>
      </div>
    </div>
  );
}
