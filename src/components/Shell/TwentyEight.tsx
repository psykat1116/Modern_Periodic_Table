import React, { useContext } from "react";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const TwentyEight = () => {
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
        } top-[calc(1%_-_6px)] left-[calc(39%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(1%_-_6px)] right-[calc(39%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(1%_-_6px)] left-[calc(39%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(1%_-_6px)] right-[calc(39%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(4.5%_-_6px)] left-[calc(29%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(4.5%_-_6px)] right-[calc(29%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(4.5%_-_6px)] left-[calc(29%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(4.5%_-_6px)] right-[calc(29%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(10%_-_6px)] left-[calc(19%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(10%_-_6px)] right-[calc(19%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(10%_-_6px)] left-[calc(19%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(10%_-_6px)] right-[calc(19%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(18%_-_6px)] left-[calc(11.5%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(18%_-_6px)] right-[calc(11.5%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(18%_-_6px)] right-[calc(11.5%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(18%_-_6px)] left-[calc(11.5%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(27%_-_6px)] right-[calc(5.2%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(27%_-_6px)] left-[calc(5.2%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(27%_-_6px)] left-[calc(5.2%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(27%_-_6px)] right-[calc(5.2%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(38%_-_6px)] right-[calc(1%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } top-[calc(38%_-_6px)] left-[calc(1%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(38%_-_6px)] left-[calc(1%_-_6px)]`}
      ></span>
      <span
        className={`absolute h-[12px] w-[12px] rounded-full ${
          theme === "dark"
            ? "bg-bg_light_placeholder"
            : "bg-bg_dark_placeholder"
        } bottom-[calc(38%_-_6px)] right-[calc(1%_-_6px)]`}
      ></span>
    </>
  );
};

export default TwentyEight;
