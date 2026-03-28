import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1 className="flex justify-center pl-50 items-center text-center mx-auto mt-30 mb-10">
        Home
      </h1>
      <div className="flex flex-col justify-center items-center text-left mt-10 pl-50 mx-auto text-[12px] min-w-fit  sm:w-dvw sm:mx-auto sm:justify-center sm:items-center sm:text-md md:w-max md:justify-center md:items-center md:text-lg lg:w-max lg:justify-center lg:items-center lg:text-xl xl:w-max xl:justify-center xl:items-center xl:text-xl  2xl:mx-auto 2xl:w-max 2xl:place-items-center 2xl:text-xl 2xl:justify-center 2xl:text-left">
        <div className="justify-center items-center">
          <p className="px-4 mx-auto mb-10 hover:bg-gray-100  hover:font-stretch-50% hover:drop-shadow-md hover:duration-100 hover:text-amber-600 ">
            This is the Home Page. We have used
            <span className="font-extrabold italic">Tailwind CSS</span> to style
            this page. It is also implemented as a Server Component, which is a
            Next ability/versalatilty.The flexbox layout is used to create a
            responsive design. The hover effect is used to create a nice user
            experience. The transition property is used to create a smooth
            transition effect. The
            <span className="font-extrabold italic">CSS Modules</span> is used
            for each of these components.
          </p>

          <p className="px-4 mx-auto mb-10 hover:bg-gray-100  hover:font-stretch-50% hover:drop-shadow-md hover:duration-100 hover:text-amber-600 ">
            Many things have been implemented in this project.
            <span className="font-extrabold italic">
              Routing has been implemented
            </span>
            in this project. The
            <span className="font-extrabold italic">client components</span>
            have been used to design the Navbar, Aside, Main and the Footer
            areas. The global.css is used to design the components and Css
            Modules is used to design the route pages. A
            <span className="font-extrabold italic"> server </span>
            component(fetchDate) is used to implement API fetching..A
            <span className="font-extrabold italic"> MenuContext</span>
            component provides the Context API for this project.
          </p>
        </div>
        <div className="justify-center items-center">
          <p className="px-4 mx-auto mb-10 hover:bg-gray-100  hover:font-stretch-50% hover:drop-shadow-md hover:duration-100 hover:text-amber-600 ">
            NextJs capabilities like{" "}
            <span className="font-extrabold italic">
              Dynamic imports, Error boundaries, and the Link component have
              been used
            </span>{" "}
            to create a nice user experience. The dynamic import is used to load
            the components only when they are
            <span className="font-extrabold italic">
              stored the Json data from the
              https://jsonplaceholder.typicode.com/users in data/db.json file{" "}
            </span>
            to implement this. The{" "}
            <span className="font-extrabold italic">
              direct import of the Json data from db.json file is implemented in
              fetchData.js component,
            </span>{" "}
            which is only available in NextJs and not in a ReactJs file.It is
            then displayed as a table in the fetchData page.
          </p>
          <p className="px-4 mx-auto mb-10 hover:bg-gray-100  hover:font-stretch-50% hover:drop-shadow-md hover:duration-100 hover:text-amber-600 ">
            The
            <span className="font-extrabold italic"> buttons </span>
            on the About and Contact pages are designed to show the use of
            <span className="font-extrabold italic">onClick event</span> .One of
            the buttons in the Contact page is used to test the Error boundary
            by throwing an error when the button is clicked. The
            <span className="font-extrabold italic">Error boundary</span> is
            implemented in the Error.js component and it
            <span className="font-extrabold italic">
              catches the error and displays a fallback UI.
            </span>
          </p>
        </div>
        <div className="justify-center items-center">
          <p className="px-4 mx-auto mb-10 hover:bg-gray-100  hover:font-stretch-50% hover:drop-shadow-md hover:duration-100 hover:text-amber-600 ">
            The hover effect is used to create a nice user experience. The{" "}
            <span className="font-extrabold italic">loading.js</span> to display
            a loading indicator and to show a 'LOADING...' sign on the top-left
            of the web page. This is seen every time a page is loaded. The{" "}
            <span className="font-extrabold italic">
              loading.js component is a server component
            </span>{" "}
            and it is used to display the loading indicator while the page is
            loading.
          </p>

          <p className="px-4 mx-auto mb-10 hover:bg-gray-100  hover:font-stretch-50% hover:drop-shadow-md hover:duration-100 hover:text-amber-600 ">
            The Error.js is used to implement the error boundary. The error
            boundary is used to catch errors in the components and to display a
            fallback UI. The error boundary is implemented in the Error.js
            component and it catches the error and displays a fallback UI. The
            error boundary is used in the Contact page to catch the error when
            the button is clicked. The NotFound.js is used to implement the 404
            page. The NotFound.js displays an UI when the user tries to access a
            page that does not exist. The error boundary testing in the
            loading.js file is also used to generate an error for testing while
            loading.
          </p>
        </div>
        <div className="justify-center items-center">
          <p className="px-4 mx-auto mb-10 hover:bg-gray-100 hover:font-stretch-50% hover:drop-shadow-md hover:duration-100 hover:text-amber-600 ">
            The hover effect has been used to create a nice user experience. The
            transition property to create a smooth transition effect has been
            used .
            <span className="font-extrabold italic">
              {" "}
              The CSS Modules for each of these components
            </span>
            . The background color transition effect is used here.The footer
            below has links to Home, About, Contact,Fetch Date pages.
          </p>
          <p className="px-4 mx-auto mb-10 hover:bg-gray-100 hover:font-stretch-50% hover:drop-shadow-md hover:duration-100 hover:text-amber-600 ">
            The hover effect is used to create a nice user experience. The
            <span className="font-extrabold italic">
              transition property is used to create a smooth transition effect
            </span>
            .The CSS Modules for each of these components. The background color
            transition effect is used here.The Footer below has links to Home,
            About, Contact,Fetch Date pages.
          </p>
        </div>
        <div className="justify-center items-center">
          <p className="px-4 mx-auto mb-10 hover:bg-gray-100 hover:font-stretch-50% hover:drop-shadow-md hover:duration-100 hover:text-amber-600 ">
            3 different CSS styling methods have been used in this project. The
            Tailwind CSS is used to style the components. The CSS Modules have
            been used to style the route pages. Some global.css styles have been
            used to style the components in the components folder. The Styled
            components has been used in Loading.js file to implement Styled
            Components for the loading indicator.
          </p>

          <p className="px-4 mx-auto mb-10 hover:bg-gray-100 hover:font-stretch-50% hover:drop-shadow-md hover:duration-100 hover:text-amber-600 ">
            The last project in the Aside folder is an{" "}
            <span className="font-extrabold italic">AI based chatbot.</span> It
            is designed to show the use of AI in a web application. It is
            implemented using the{" "}
            <span className="font-extrabold italic">
              Gemini AI Model Gemini AI(gemini-2.0-flash-lite) to Transcribe
              Text and save it to a file or many files.
            </span>{" "}
            The text is Transcribed court style, Verbatim and each speaker is
            separated into a different paragraph.{" "}
            <span className="font-extrabold italic">
              There is an option to later save the text into a file in your pc
              by clicking a button.
            </span>{" "}
            This is ideal for transcribing text recorded in a meeting in a text
            form & it can transcribe it as explained above.
            <span className="font-extrabold italic">
              The Claude AI has been used to work on this project.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
