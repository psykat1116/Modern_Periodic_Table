"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { useParams } from "next/navigation";

const page = () => {
  const { id }: { id: string } = useParams();
  const prevId = parseInt(id) - 1 === 0 ? 118 : parseInt(id) - 1,
    nextId = parseInt(id) + 1 === 119 ? 1 : parseInt(id) + 1;
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0f0f0f] justify-start items-center">
      <Navbar />
      <div className="w-full px-10 text-white flex justify-between items-center mt-5 text-lg bg-[#0f0f0f]">
        <Link href={`/elements/${prevId}`}>
          <BsArrowLeft className="cursor-pointer" />
        </Link>
        <p>Hydrogen</p>
        <Link href={`/elements/${nextId}`}>
          <BsArrowRight className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default page;
