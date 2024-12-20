"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";


export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}) => {
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(" "),
    };
  });
  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
            return (
              <>
                <div key={`word-${idx}`} className="inline-block">
                  {word.text.map((char, index) => (
                    <span
                      key={`char-${index}`}
                      className={cn(
                        `text-white`,
                        word.className
                      )}
                    >
                      {char}
                    </span>
                  ))}{" "}
                </div>
                <span className="whitespace-pre text-2xl"> </span>
              </>
            );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2 flex"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 0,
        }}
      >
        <div
          className="text-2xl md:text-4xl lg:text-5xl text-center md:text-left font-bold  md:whitespace-nowrap"
        >
          {renderWords()}{" "}
        </div>{" "}
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,

            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn(
            "block rounded-sm w-[4px] h-full bg-custom-teal",
            cursorClassName
          )}
        ></motion.span>
      </motion.div>
    </div>
  );
};
