import { useContext } from "react";

import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const Fifteen = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[-7px] left-[calc(50%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(4%_-_6px)] left-[calc(30%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(4%_-_6px)] right-[calc(30%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(15%_-_6px)] left-[calc(14%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(15%_-_6px)] right-[calc(14%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(33%_-_6px)] left-[calc(2.5%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(33%_-_6px)] right-[calc(2.5%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(55%_-_6px)] left-[-7px]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(55%_-_6px)] right-[-7px]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(24%_-_6px)] left-[calc(6%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(24%_-_6px)] right-[calc(6%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(8%_-_6px)] left-[calc(21%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(8%_-_6px)] right-[calc(21%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(0.5%_-_6px)] left-[calc(40%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(0.5%_-_6px)] right-[calc(40%_-_6px)]`}
      ></span>
    </>
  );
};

export default Fifteen;
