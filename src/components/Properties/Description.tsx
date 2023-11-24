import DOMPurify from "dompurify";
import React, { useState, useContext } from "react";
import { HiMiniSpeakerWave, HiOutlinePause, HiMiniPlay } from "react-icons/hi2";
import { MdReplay, MdContentCopy, MdCheck } from "react-icons/md";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import { motion } from "framer-motion";

const Description = ({ description }: { description: string }) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  const speech = new SpeechSynthesisUtterance(description);
  const handleSpeak = async () => {
    speechSynthesis.speak(speech);
    setIsSpeaking(true);
  };
  speech.addEventListener("end", () => {
    setIsSpeaking(false);
  });
  const handleCopy = () => {
    setIsCopying(true);
    navigator.clipboard.writeText(description);
    setTimeout(() => {
      setIsCopying(false);
    }, 500);
  };
  return (
    <motion.div
      className={`${
        theme === "dark"
          ? "text-text_primary bg-bg_dark"
          : "text-text_secondary bg-bg_light"
      } shadow-lg rounded-sm w-full p-4 text-text_primary flex flex-col justify-start items-center bg-opacity-60 backdrop-blur-require`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeInOut", delay: 0.1 }}
    >
      <div className="flex justify-between items-center mb-2 w-full">
        <h1 className="text-xl">Description</h1>
        {!isSpeaking ? (
          <div className="flex justify-end items-center">
            <HiMiniSpeakerWave
              className="cursor-pointer"
              onClick={handleSpeak}
            />
            {!isCopying ? (
              <MdContentCopy
                onClick={handleCopy}
                className="ml-3 cursor-pointer"
              />
            ) : (
              <MdCheck className="ml-3 cursor-pointer text-green-700" />
            )}
          </div>
        ) : (
          <div className="flex justify-end items-center">
            {isPaused ? (
              <HiMiniPlay
                onClick={() => {
                  speechSynthesis.resume();
                  setIsPaused(false);
                }}
              />
            ) : (
              <HiOutlinePause
                onClick={() => {
                  speechSynthesis.pause();
                  setIsPaused(true);
                }}
              />
            )}
            <MdReplay
              className="ml-3"
              onClick={() => {
                speechSynthesis.cancel();
                setIsSpeaking(false);
              }}
            />
          </div>
        )}
      </div>
      <p
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
      ></p>
    </motion.div>
  );
};

export default Description;
