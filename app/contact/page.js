"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./contact.module.css";

export default function Contact() {
  const router = useRouter();
  const [crash, setCrash] = useState(false);
  if (crash)
    throw new Error("Test error boundary for Contact Page. It is working!");
  function handleClick({ a }) {
    console.log(`Button `, a, `clicked!`);
    alert(`Button ` + a + ` clicked!`);
  }

  return (
    <div className={styles.contact}>
      <h1 className="flex justify-center pl-50 items-center text-center mx-auto mt-30 mb-10">
        Contact
      </h1>
      <div className="flex flex-col justify-center items-center text-left mt-10 pl-50 mx-auto text-[12px] min-w-fit  sm:w-dvw sm:mx-auto sm:justify-center sm:items-center sm:text-md md:w-max md:justify-center md:items-center md:text-lg lg:w-max lg:justify-center lg:items-center lg:text-xl xl:w-max xl:justify-center xl:items-center xl:text-xl  2xl:mx-auto 2xl:w-max 2xl:place-items-center 2xl:text-xl 2xl:justify-center 2xl:text-left">
        {/* <div className="flex flex-col justify-center items-center text-left ml-15 mt-10 pl-40 mx-auto text-[12px] min-w-fit  sm:w-dvw sm:mx-auto sm:justify-center sm:items-center sm:text-md md:w-max md:justify-center md:items-center md:text-lg lg:w-max lg:justify-center lg:items-center lg:text-xl xl:w-max xl:justify-center xl:items-center xl:text-3xl  2xl:mx-auto 2xl:w-max 2xl:place-items-center 2xl:text-5xl 2xl:justify-center 2xl:text-center"> */}

        <div className="justify-start items-center">
          <p className="px-3 border-0 mx-0.5 text-xs w-fit rounded-md wrap-break-word hover:bg-gray-100 mb-10 hover:text-amber-600 hover:drop-shadow-md hover:duration-500 sm:text-sm md:text-lg lg:text-xl xl:text-xl ">
            {/* <p className="px-4 mx-auto mb-10 hover:bg-gray-100 hover:font-stretch-50% hover:drop-shadow-md hover:duration-100 hover:text-amber-600 "> */}
            My contact details are shown in the Aside component, using Link. You
            can click on any of the links to navigate to my{" "}
            <span className="font-extrabold italic">
              Github page, LinkedIn page, my Vite React project page,my Vite Vue
              Project Page, my latest Gemini AI based web app and my Email.
            </span>
          </p>
          <button
            onClick={() => handleClick({ a: 1 })}
            className="flex mt-1 px-15 mx-3 w-fit mb-6 text-xs text-nowrap hover:px-20 justify-center items-center  bg-emerald-400 rounded-md text-yellow-600 sm:px-4 sm:text-sm sm:wrap-normal md:px-6 md:text-lg lg:px-6 lg:text-2xl xl:px-8 xl:text-2xl"
          >
            Choose an option
          </button>
        </div>
        <div className="justify-center items-center">
          {/* <p className="px-4 mx-auto mb-10 hover:bg-gray-100  hover:font-stretch-50% hover:drop-shadow-md hover:duration-100 hover:text-amber-600 "> */}
          <p className="px-3 border-0 mx-0.5 text-xs w-fit rounded-md wrap-break-word hover:bg-gray-100 mb-10 hover:text-amber-600 hover:drop-shadow-md hover:duration-500 sm:text-sm md:text-lg lg:text-xl xl:text-xl ">
            The onClick event handler has been implemented in the buttons on
            this page to show the use of event handlers in React.{" "}
            <span className="font-extrabold italic">
              The handleClick function is called when the button is clicked!
            </span>
          </p>
          <button
            className="flex mt-1 px-15 mx-3 w-fit mb-6 text-xs text-nowrap hover:px-20 justify-center items-center  bg-orange-300 rounded-md text-yellow-600 sm:px-4 sm:text-sm sm:wrap-normal md:px-6 md:text-lg lg:px-6 lg:text-2xl xl:px-8 xl:text-2xl"
            onClick={() => {
              setCrash(true);
            }}
          >
            Test the error boundary!!
          </button>
        </div>
        <div className="justify-center items-center">
          {/* <p className="px-4 mx-auto mb-10 hover:bg-gray-100  hover:font-stretch-50% hover:drop-shadow-md hover:duration-100 hover:text-amber-600 "> */}
          <p className="px-3 border-0 mx-0.5 text-xs w-fit rounded-md wrap-break-word hover:bg-gray-100 mb-10 hover:text-amber-600 hover:drop-shadow-md hover:duration-500 sm:text-sm md:text-lg lg:text-xl xl:text-xl ">
            An <span className="font-extrabold italic">Error boundary</span> has
            been implemented in this page to catch any errors that might occur
            in the component tree. To test the error boundary, click on the
            "Test the error boundary!!" button. This will throw an error and the
            error boundary will catch it and display a fallback UI instead of
            crashing the entire application. The error boundary in the fetchData
            page to catch any errors that might occur while fetching data from
            the API. To test the error boundary has also been implemented in the
            fetchData page and other pages and folder to see how the error
            bubbles up to the root folder. The{" "}
            <span className="font-extrabold italic">not-found.js </span> has
            been implemented so that when you modify the URL in the fetch
            function to an invalid URL you can see how the error boundary
            handles it.
          </p>
          <button
            onClick={() => router.push("/")}
            className="flex mt-1 px-15 mx-3 w-fit mb-6 text-xs text-nowrap hover:px-20 justify-center items-center  bg-emerald-400 rounded-md text-yellow-600 sm:px-4 sm:text-sm sm:wrap-normal md:px-6 md:text-lg lg:px-6 lg:text-2xl xl:px-8 xl:text-2xl"
          >
            Go to Home
          </button>
        </div>
        <div className="justify-center items-center">
          {/* <p className="px-4 mx-auto mb-10 hover:bg-gray-100  hover:font-stretch-50% hover:drop-shadow-md hover:duration-100 hover:text-amber-600 "> */}
          <p className="px-3 border-0 mx-0.5 text-xs w-fit rounded-md wrap-break-word hover:bg-gray-100 mb-10 hover:text-amber-600 hover:drop-shadow-md hover:duration-500 sm:text-sm md:text-lg lg:text-xl xl:text-xl ">
            The <span className="font-extrabold italic">useRouter hook</span> is
            used to implement the routing to navigate through all the pages in
            the Footer.js. The useRouter hook is used to programmatically
            navigate to different pages in the application. In the Footer.js,
            the useRouter hook is used to navigate to the Home, About, Contact
            and Fetch Data pages when the corresponding links are clicked. You
            can click on any of the links in the footer to navigate to the
            respective pages and see how the useRouter hook works in Next.js.
          </p>
          <button
            onClick={() => router.push("/about")}
            className="flex mt-1 px-15 mx-3 w-fit mb-6 text-xs text-nowrap hover:px-20 justify-center items-center  bg-emerald-400 rounded-md text-yellow-600 sm:px-4 sm:text-sm sm:wrap-normal md:px-6 md:text-lg lg:px-6 lg:text-2xl xl:px-8 xl:text-2xl"
          >
            Go to about
          </button>
        </div>
        <div className="justify-center items-center">
          {/* <p className="px-4 mx-auto mb-10 hover:bg-gray-100  hover:font-stretch-50% hover:drop-shadow-md hover:duration-100 hover:text-amber-600 "> */}
          <p className="px-3 border-0 mx-0.5 text-xs w-fit rounded-md wrap-break-word hover:bg-gray-100 mb-10 hover:text-amber-600 hover:drop-shadow-md hover:duration-500 sm:text-sm md:text-lg lg:text-xl xl:text-xl ">
            The <span className="font-extrabold italic">nested routes</span>{" "}
            have been created and also error pages have been created for the
            application. The nested routes are created in the fetchData page
            where A nested route has been created for{" "}
            <span className="font-extrabold italic">testing errors.</span> The
            error pages are created in the subfolders under the fetchData page
            where a testError.js file that throws an error has been created to
            test the error boundary.{" "}
            <span className="font-extrabold italic">
              You can navigate to the /fetchData/testError route to see how the
              error boundary handles the error and displays the fallback UI.
            </span>{" "}
            In doing so, I have demonstarted the use of nested routes and error
            pages in Next.js and how the error bubbles up to the next error.js
            file.
          </p>

          <button
            onClick={() => router.push("/fetchData")}
            className="flex mt-1 px-15 mx-3 w-fit mb-6 text-xs text-nowrap hover:px-20 justify-center items-center  bg-emerald-400 rounded-md text-yellow-600 sm:px-4 sm:text-sm sm:wrap-normal md:px-6 md:text-lg lg:px-6 lg:text-2xl xl:px-8 xl:text-2xl"
          >
            Go to fetchData
          </button>
        </div>
      </div>
    </div>
  );
}
