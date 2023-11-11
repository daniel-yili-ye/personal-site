import { useEffect, useState } from "react";
import "./App.css";
import dye from "./assets/dye_face.jpeg";
import Light from "./assets/Light";
import Dark from "./assets/Dark";
import Twitter from "./assets/Twitter";
import Github from "./assets/Github";
import LinkedIn from "./assets/LinkedIn";

function App() {
  const [darkMode, setDarkMode] = useState(isDark);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  function isDark() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="table absolute top-0 left-0 h-full w-full">
      <div className="table-cell align-middle">
        <div className="container py-6 max-w-xl space-y-6 px-6 block m-auto ">
          <div className="sm:flex space-y-6 sm:space-y-0 sm:space-x-6 justify-center items-center">
            <img className="rounded-xl sm:w-52" src={dye} alt="Daniel Ye" />
            <div className="flex flex-col space-y-3 text-left">
              <h1 className="font-semibold text-3xl">
                👋 Hello, I'm Daniel Ye
              </h1>
              <p className="text-neutral-500 dark:text-neutral-300">
                <span className="font-bold">Software Engineer</span> by day,{" "}
                <span className="font-bold">CPA</span> by training,{" "}
                <span className="font-bold">Christian</span> by life. I love
                numbers and code, but also enjoy a good book and a swim to
                unwind. Let's create something great together!
              </p>
            </div>
          </div>
          <div className="font-light text-xl space-y-4">
            <h2 className="rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-gray-600 dark:hover:bg-gray-500 dark:border-gray-800 p-2 cursor-pointer border">
              <a href="" target="_blank" rel="noopener noreferrer">
                🚀 Projects
              </a>
            </h2>
            <h2 className="rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-gray-600 dark:hover:bg-gray-500 dark:border-gray-800 p-2 cursor-pointer border">
              <a
                href="https://drive.google.com/file/d/1-O5conBYPGK6TjG-3epk3iP1PuLM-6aG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 Resume
              </a>
            </h2>
            <h2 className="rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-gray-600 dark:hover:bg-gray-500 dark:border-gray-800 p-2 cursor-pointer border">
              <a
                href="https://www.goodreads.com/user/show/17699567-daniel-ye"
                target="_blank"
                rel="noopener noreferrer"
              >
                📚 Goodreads
              </a>
            </h2>
            <h2 className="rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-gray-600 dark:hover:bg-gray-500 dark:border-gray-800 p-2 cursor-pointer border">
              <a href="mailto:daniel.ye@live.com">🤙 Contact Me</a>
            </h2>
          </div>
          <div className="flex justify-center items-center gap-6">
            <Twitter></Twitter>
            <Github></Github>
            <LinkedIn></LinkedIn>
            <button
              type="button"
              aria-label="Toggle dark mode"
              className="p-2 transition rounded-full shadow-lg bg-white/90 shadow-neutral-800/10 ring-1 ring-neutral-900/5 backdrop-blur dark:bg-gray-800/90 dark:ring-white/10 dark:hover:ring-white/20"
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            >
              {darkMode ? <Dark></Dark> : <Light></Light>}
            </button>
            <p className="text-neutral-500 dark:text-neutral-300">
              © Daniel Ye
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
