"use client";
import { useRouter } from "next/navigation";
import Example from "./Example";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="flex gap-3 bg-linear-to-r w-200 mx-auto from-cyan-600 to-blue-200 text-orange-800 hover:text-yellow-300 sm:mx-auto sm:w-max md:mx-auto md:w-max lg:w-max lg:mx-auto xl:w-max xl:mx-auto 2xl:w-max 2xl:mx-auto">
      <ul className="flex gap-15 justify-between text-sm items-center p-10 mx-auto sm:text-lg sm:mx-auto sm:gap-30 md:text-xl md:mx-auto md:gap-40 lg:text-2xl lg:mx-auto lg:gap-60 xl:text-3xl xl:mx-auto xl:gap-60 2xl:4xl 2xl:mx-auto 2xl:gap-60">
        <div className="flex flex-start ">
          <Example />
        </div>
        <li onClick={() => router.push("/")}>Home</li>

        <li onClick={() => router.push("/about")}>About</li>

        <li onClick={() => router.push("/contact")}>Contact</li>

        <li onClick={() => router.push("/fetchData")}>Fetch Data</li>

        <li onClick={() => router.push("/fetchData/testError")}>Test Error</li>
      </ul>
    </footer>
  );
}
