import { useState, useEffect } from "react";
import { FaCloudSun, FaCloudMoon } from "react-icons/fa";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    // Ensure to toggle the `tw-dark` class here
    document.documentElement.classList.toggle("tw-dark", isDarkMode);
  }, []);

  const handleToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    // Toggle the `tw-dark` class based on the new state
    document.documentElement.classList.toggle("tw-dark", newDarkMode);

    // Save the preference to localStorage
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
