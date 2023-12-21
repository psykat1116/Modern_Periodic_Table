import React, { useContext } from "react";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const TwentyFour = () => {
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
        } bottom-[-7px] left-[calc(50%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(50%_-_6px)] left-[-7px]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(50%_-_6px)] right-[-7px]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(1.5%_-_6px)] left-[calc(37%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(1.5%_-_6px)] right-[calc(37%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(7%_-_6px)] left-[calc(24%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(7%_-_6px)] right-[calc(24%_-_6px)]`}
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
        } top-[calc(25%_-_6px)] left-[calc(6%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(25%_-_6px)] right-[calc(6%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(37.5%_-_6px)] left-[calc(1.5%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(37.5%_-_6px)] right-[calc(1.5%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(1.5%_-_6px)] left-[calc(37%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(1.5%_-_6px)] right-[calc(37%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(7%_-_6px)] left-[calc(24%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(7%_-_6px)] right-[calc(24%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(15%_-_6px)] right-[calc(14%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(15%_-_6px)] left-[calc(14%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(25%_-_6px)] right-[calc(6%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(25%_-_6px)] left-[calc(6%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(37.5%_-_6px)] left-[calc(1.5%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(37.5%_-_6px)] right-[calc(1.5%_-_6px)]`}
      ></span>
    </>
  );
};

export default TwentyFour;
