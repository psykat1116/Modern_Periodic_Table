import React, { useContext } from "react";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const Seventeen = () => {
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
        } top-[calc(3%_-_6px)] left-[calc(33%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(3%_-_6px)] right-[calc(33%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(12%_-_6px)] left-[calc(17%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(12%_-_6px)] right-[calc(17%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(26%_-_6px)] left-[calc(5.5%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(26%_-_6px)] right-[calc(5.5%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(44%_-_6px)] left-[-7px]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(44%_-_6px)] right-[-7px]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(36%_-_6px)] left-[calc(1.5%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(36%_-_6px)] right-[calc(1.5%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(20%_-_6px)] left-[calc(9%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(20%_-_6px)] right-[calc(9%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(9%_-_6px)] left-[calc(20.5%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(9%_-_6px)] right-[calc(20.5%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(1%_-_6px)] left-[calc(38%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(1%_-_6px)] right-[calc(38%_-_6px)]`}
      ></span>
    </>
  );
};

export default Seventeen;
