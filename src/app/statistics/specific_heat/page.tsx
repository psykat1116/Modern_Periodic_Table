"use client";
import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Title,
} from "chart.js";
import labelData, { shData } from "@/constant/GraphData/SpecificHeat";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import Navbar from "@/components/Navbar";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Title
);

const Page = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  let bgColor, bdColor;
  theme === "dark"
    ? (ChartJS.defaults.borderColor = "#1b1a1a")
    : (ChartJS.defaults.borderColor = "#d6cccc");
  theme === "dark" ? (bgColor = "#d6cccc") : (bgColor = "#1b1a1a");
  theme === "dark" ? (bdColor = "#d6cccc") : (bdColor = "#1b1a1a");
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Specific Heat of Elements",
      },
    },
  };
  const data = {
    labels: labelData,
    datasets: [
      {
        label: "Specific Heat (J/Kg K)",
        data: shData,
        backgroundColor: bgColor,
        borderColor: bdColor,
        borderWidth: 1,
      },
    ],
  };
  return (
    <div
      className={`min-h-screen w-full flex justify-start items-center flex-col ${
        theme === "dark" ? "bg-dark_primary" : "bg-light_primary"
      }`}
    >
      <Navbar />
      <div className="flex justify-center items-center w-full xl:w-[90%] h-[90vh]">
        <Line data={data} options={options} className="rotate-90 xl:rotate-0" />
      </div>
    </div>
  );
};

export default Page;
