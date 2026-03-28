"use client";
import { useState } from "react";

export default function testError() {
  const [err, setErr] = useState(false);
  if (err)
    throw new Error("Test error boundary for testError Page. It is working!");

  return (
    <div className="flex flex-col text-2xl text-center mx-auto mt-30 pl-80">
      <h1 className="flex justify-center ml-0 items-center mb-10">
        Test Error
      </h1>
      <button
        className="flex p-6 text-shadow-background justify-center rounded-lg bg-red-300 w-auto"
        onClick={() => {
          setErr(true);
        }}
      >
        Generate a runtime-error!!
      </button>
    </div>
  );
}
