"use client";

export default function Error({ error, reset }) {
  /* render fallback UI */
  return (
    <div className="flex flex-col mx-auto justify-center text-2xl gap-6">
      <p className="text-2xl">{error.message}</p>
      <button
        className="inline-block p-2 bg-amber-300 rounded-md"
        onClick={reset}
      >
        Something went wrong in the components folder! Try Again
      </button>
    </div>
  );
}
