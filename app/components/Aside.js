"use client";
import Link from "next/link";
import { useMenu } from "../context/MenuContext.jsx";

export default function Aside() {
  const { isOpen, toggleMenu, closeMenu, openMenu } = useMenu();
  return (
    <div className="flex-1 gap-15 text-[14px] hover:text-[16px] mx-auto z-10 justify-center items-center scroll-p-10 pl-8 w-fit h-900 mb-0 p-6 bg-linear-to-r from-cyan-600 to-blue-300 text-emerald-300 hover:text-emerald-100 sm:md:lg:xl:2xl:bg-linear-to-r sm:md:lg:xl:2xl:hover:mx-auto">
      <Link href="https://github.com/sonu-cyber" target="_blank">
        <p className="flex pt-30 pb-20 sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
          Github
        </p>
      </Link>
      <Link
        href="https://www.linkedin.com/in/gayathriraghuram/"
        target="_blank"
      >
        <p className="flex pt-30 pb-20 sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
          LinkedIn
        </p>
      </Link>
      <Link href="https://vite-portfolio-react.netlify.app" target="_blank">
        <p className="pt-30 pb-20 sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
          React Portfolio
        </p>
      </Link>
      <Link href="https://portfolio-gayathri.netlify.app" target="_blank">
        <p className="pt-30 pb-20 sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
          Vite Vue Portfolio
        </p>
      </Link>
      <Link href="https://transcribedatavite.netlify.app" target="_blank">
        <p className="pt-30 pb-20 sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
          Transcribe Data
        </p>
      </Link>
      <div>
        {/* <p className="pt-30 pb-20  hover: flex-block hover:text-wrap"> */}
        <p className="pt-30 pb-20 sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
          <a href="mailto:gayathriraguram1@gmail.com" target="_blank">
            Email:
          </a>
        </p>
      </div>{" "}
      <button
        className="pt-30 pb-20 sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"
        onClick={toggleMenu}
      >
        {isOpen ? "CloseMenu" : "OpenMenu "}
      </button>
    </div>
  );
}
