"use client";
import styles from "./about.module.css";
import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: olive;
`;

export default function About() {
  const [err, setErr] = useState(false);
  if (err)
    throw new Error(
      "This is a generated error for testing the error boundary!"
    );

  function handleClick({ a }) {
    console.log(`Button `, a, `clicked!`);
    alert(`Button ` + a + ` clicked!`);
    return a;
  }
  return (
    <div className={styles.about}>
      <h1 className="flex justify-center pl-50 items-center text-center mx-auto mt-30 mb-10">
        About
      </h1>
      <div className="flex flex-col justify-center items-center text-left mt-10 pl-50 mx-auto text-[12px] min-w-fit  sm:w-dvw sm:mx-auto sm:justify-center sm:items-center sm:text-md md:w-max md:justify-center md:items-center md:text-lg lg:w-max lg:justify-center lg:items-center lg:text-xl xl:w-max xl:justify-center xl:items-center xl:text-xl  2xl:mx-auto 2xl:w-max 2xl:place-items-center 2xl:text-xl 2xl:justify-center 2xl:text-left">
        <div className="justify-center items-center">
          <p className="px-3 border-0 mx-0.5 text-xs w-fit rounded-md wrap-break-word hover:bg-gray-100 mb-10 hover:text-cyan-500 hover:drop-shadow-md hover:duration-500 sm:text-sm md:text-lg lg:text-xl xl:text-xl ">
            This project uses NextJs and TailwindCss. The app router is used to
            route the pages. The client components are used to design the
            Navbar, Aside, Main and the Footer areas. The global.css to is used
            design the components and CSS Modules for the route pages. A Server
            Component(fetchDate) is used to implement API fetching..A
            MenuContext component provides the Context API for this project.
          </p>

          <button
            onClick={() => handleClick({ a: "a" })}
            className="flex mt-1 px-15 mx-3 w-50 mb-6 text-xs text-nowrap hover:px-30 justify-center items-center  bg-amber-500 rounded-md text-yellow-200 sm:px-4 sm:text-sm sm:wrap-normal md:px-6 md:text-lg lg:px-6 lg:text-2xl xl:px-8 xl:text-2xl"
          >
            Choose an option
          </button>

          <p className="px-3 border-0 mx-0.5 text-xs w-fit rounded-md wrap-break-word hover:bg-gray-100 mb-10 hover:text-cyan-500 hover:drop-shadow-md hover:duration-500 sm:text-sm md:text-lg lg:text-xl xl:text-xl ">
            The buttons above and below(Choose an option) are designed to show
            the use of onClick event handler in React. The Styled Components
            have been used for one of the buttons on this page. It can be
            modified to show the use of any event handler in React. The
            handleClick function is called when the button is clicked and it
            logs the button number that was clicked and also shows an alert with
            the same information. One of the buttons generates an error, to test
            the error using the error.js component.
          </p>
          <button
            onClick={() => handleClick({ a: "b" })}
            className="flex mt-1 px-15 mx-3 w-50 mb-6 text-xs text-nowrap hover:px-30 justify-center items-center  bg-amber-500 rounded-md text-yellow-200 sm:px-4 sm:text-sm sm:wrap-normal md:px-6 md:text-lg lg:px-6 lg:text-2xl xl:px-8 xl:text-2xl"
          >
            Choose an option
          </button>
        </div>
        <div className="justify-center items-center">
          <p className="px-3 border-0 mx-0.5 text-xs w-fit rounded-md wrap-break-word hover:bg-gray-100 mb-10 hover:text-cyan-500 hover:drop-shadow-md hover:duration-500 sm:text-sm md:text-lg lg:text-xl xl:text-xl ">
            The Aside Panel on the left is designed to show the use of Context
            API in React. The MenuContext component is implemented slightly to
            show the toggle of Menu. It also shows the use of useState hook to
            manage the state of the menu and the useContext hook to consume the
            context in the Aside component. The toggleMenu function is used to
            toggle the state of the menu and the isOpen state is used to
            determine whether the menu is open or closed.
          </p>
          <Button
            onClick={() => setErr(true)}
            className="flex mt-1 px-15 mx-3 w-55 mb-6 text-xs text-nowrap hover:px-30 justify-center items-center  bg-amber-500 rounded-md text-yellow-200 sm:px-4 sm:text-sm sm:wrap-normal md:px-6 md:text-lg lg:px-6 lg:text-2xl xl:px-8 xl:text-2xl"
          >
            Generate an error!!
          </Button>
          <p className="px-3 border-0 mx-0.5 text-xs w-fit rounded-md wrap-break-word hover:bg-gray-100 mb-10 hover:text-cyan-500 hover:drop-shadow-md hover:duration-500 sm:text-sm md:text-lg lg:text-xl xl:text-xl ">
            The Aside page also shows the use of Link component from Next.js to
            create links to my LinkedIn account, Github account, a React based
            web app called React Portfolio, a Vue based web app called Vite Vue
            Portfolio and an AI(using Gemini 2.0 Flash Lite) based web app
            called TranscribeDataVite. It also shows the use of anchor tag to
            create a mailto link to my email address. The Link component is used
            to create links to external websites and the anchor tag is used to
            create a mailto link.
          </p>
          <button
            onClick={() => handleClick({ a: "c" })}
            className="flex mt-1 px-15 mx-3 w-50 mb-6 text-xs text-nowrap hover:px-30 justify-center items-center  bg-amber-500 rounded-md text-yellow-200 sm:px-4 sm:text-sm sm:wrap-normal md:px-6 md:text-lg lg:px-6 lg:text-2xl xl:px-8 xl:text-2xl"
          >
            Choose an option
          </button>
        </div>
      </div>
    </div>
  );
}
