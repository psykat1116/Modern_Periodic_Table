"use client";
import React, { useContext } from "react";
import GetOrbit from "./GetOrbit";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import { motion } from "framer-motion";
import ElementDetailsProps from "@/types/ElementTypes";
import { ExternalLink, Particles } from "./Properties";
import { useParams } from "next/navigation";

interface LeftSideProps {
  elem: ElementDetailsProps | null;
}

const LeftSide: React.FC<LeftSideProps> = ({ elem }) => {
  const { id }: { id: string } = useParams();
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div
      className={`w-1/3 h-[79vh] flex justify-start flex-col items-center ${
        theme === "dark" ? "text-text_primary" : "text-text_secondary"
      } gap-2 max-[1200px]:w-1/2 max-sm:w-full`}
    >
      <motion.div
        className={`flex justify-center flex-col items-center ${
          theme === "dark" ? "bg-bg_dark" : "bg-bg_light"
        } shadow-md w-full h-[66vh] rounded-sm p-5 bg-opacity-60 backdrop-blur-require`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
      >
        <div className="w-full h-full flex justify-center items-center max-[1200px]:scale-[0.70] max-sm:scale-[0.60] scale-95 max-sm:h-[500px]">
          {elem && (
            <>
              <GetOrbit id={id} />
              <div
                className={`absolute h-[35px] w-[35px] ${
                  theme === "dark"
                    ? "bg-bg_light_placeholder text-text_secondary"
                    : "bg-bg_dark_placeholder text-text_primary"
                } flex justify-center items-center rounded-full z-10`}
              >
                {elem?.general_properties.symbol}
              </div>
            </>
          )}
        </div>
      </motion.div>
      {elem && <Particles {...elem.particles} />}
      {elem?.external_links && <ExternalLink {...elem.external_links} />}
    </div>
  );
};

export default LeftSide;
