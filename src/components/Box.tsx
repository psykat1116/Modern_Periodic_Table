"use client";
import React, { useState } from "react";
import BoxTypes from "@/types/BoxTypes";
import Link from "next/link";
import pickColors from "@/helpers/pickColors";

const Box = ({ id, category, name }: BoxTypes) => {
  const color = pickColors(category);
  return (
    <Link
      href={`/elements/${id}`}
      className={`relative h-[55px] w-[55px] border-[2px] border-[#969696] text-white flex justify-center items-center before:absolute before:content-[""] before:h-1 before:w-1 before:rounded-full before:top-1 before:right-1 overflow-hidden ${color} hover:before:scale-[20] before:transition-all before:duration-500 hover:border-transparent rounded-sm font-bold`}
    >
      <p className="z-10 text-xl">{name}</p>
    </Link>
  );
};

export default Box;
