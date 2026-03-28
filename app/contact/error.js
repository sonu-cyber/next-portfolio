"use client";

export default function Error({ error, reset }) {
  /* render fallback UI */
  return (
    <div className="flex flex-col text-2xl gap-6 mx-auto pl-80">
      <h1 className="flex items-center justify-center mx-auto border-2 border-amber-200 not-last-of-type:rounded-xl w-150 mt-75 p-2 text-orange-600">
        Something went wrong in the contact folder!!
      </h1>
      <p className="flex text-2xl mx-auto text-amber-600">{error.message}</p>
      <button
        className="inline-block mx-auto justify-center items-center rounded-lg p-2 w-50 text-orange-900 bg-amber-500"
        onClick={reset}
      >
        Try Again
      </button>
    </div>
  );
}
