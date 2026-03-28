"use client";

export default function Error({ error, reset }) {
  /* render fallback UI */
  return (
    <div className="flex flex-col text-2xl gap-6 mx-auto mt-50">
      <h1 className="flex mx-auto items-center justify-center w-175 border-2 border-amber-300 rounded-xl text-orange-600 p-4 ">
        Something went wrong in the fetchData page!
      </h1>
      <p className="text-2xl mx-auto text-amber-600">{error.message}</p>
      <button
        className="inline-block mx-auto rounded-xl p-2 w-50 text-orange-900 bg-amber-500"
        onClick={reset}
      >
        Try Again
      </button>
    </div>
  );
}
