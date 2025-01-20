import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useDarkMode } from "../../context/useDarkMode";
import { useState } from "react";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [iconVisible, setIconVisible] = useState(true);

  const handleToggle = () => {
    setIconVisible(false); // Start fade-out effect
    setTimeout(() => {
      toggleDarkMode(); // Switch theme
      setIconVisible(true); // Start fade-in effect
    }, 300); // Matches the transition duration
  };

  return (
    <header className="transition  ease-in-out dark:bg-[#2b3743] dark:border-[#1c2b33]  p-4 border-b border-[hsl(0, 0%, 52%)] bg-white">
      <div className="container flex justify-between items-center">
        <div>
          <h2 className="font-extrabold dark:text-[#fcffff]">
            Where in the World?
          </h2>
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <div
              className={`transition-opacity transform duration-300 ${
                iconVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              {isDarkMode ? (
                <IoSunnyOutline
                  className="w-6 h-6 cursor-pointer text-white"
                  onClick={handleToggle}
                />
              ) : (
                <IoMoonOutline
                  className="w-6 h-6 cursor-pointer"
                  onClick={handleToggle}
                />
              )}
            </div>
            <p className="font-semibold dar">Dark Mode</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
