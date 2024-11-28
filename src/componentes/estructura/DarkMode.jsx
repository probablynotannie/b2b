import { useState, useEffect } from "react";
import { FaCloudSun, FaCloudMoon } from "react-icons/fa";
function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", !darkMode);
  };
  return (
    <button
      onClick={() => handleToggle()}
      className="text-white hover:text-secondary transition cursor-pointer dark:bg-slate-700 bg-slate-700 flex items-center justify-center w-[35px] h-[35px] rounded-full text-2xl"
    >
      {darkMode ? <FaCloudSun /> : <FaCloudMoon />}
    </button>
    /*  <label className="inline-flex items-center cursor-pointer">
              <input
                checked={darkMode}
                onChange={handleToggle}
                type="checkbox"
                value=""
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-secondary"></div>
        </label>  */
  );
}

export default DarkMode;
