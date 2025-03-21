import { useState, useEffect } from "react";
import { FaCloudSun, FaCloudMoon } from "react-icons/fa";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle("tw-dark", isDarkMode);
  }, []);

  const handleToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("tw-dark", newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  return (
    <button
      onClick={handleToggle}
      className="tw-text-white hover:tw-text-secondary tw-transition tw-cursor-pointer dark:tw-bg-slate-700 tw-bg-slate-700 tw-flex tw-items-center tw-justify-center tw-w-[35px] tw-h-[35px] tw-rounded-full tw-text-2xl"
    >
      {darkMode ? <FaCloudSun /> : <FaCloudMoon />}
    </button>
  );
}

export default DarkMode;
