import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center text-center text-2xl h-12 py-4 p-60 m-100 w-100">
      <p className="flex text-center h-12 py-4 px-4 w-60 border-0 rounded-xl text-emerald-600 bg-cyan-100">
        Page Not Found
      </p>
      <p className="text-center h-20 py-3 px-4 w-60 border-0 rounded-xl text-emerald-600 bg-cyan-100">
        Please check the URL and try again.
      </p>
    </div>
  );
}
