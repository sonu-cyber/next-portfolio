"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center mx-auto mt-75 text-2xl gap-6 pl-80">
      <h1 className="flex items-center justify-center border-2 border-amber-200 not-visited:rounded-xl w-150 text-orange-600 p-4 ">
        Something went wrong in the App folder level!
      </h1>
      <p className="text-2xl mx-auto text-amber-600">{error.message}</p>
      <button
        className="inline-block place-items-center rounded-xl mx-auto p-2 w-50 text-orange-900 bg-amber-500"
        onClick={reset}
      >
        Try Again!
      </button>
    </div>
  );
}
