"use client";

import React, { useState, useEffect } from "react";
import { SpinnerLoading } from "../spinnerLoading";
import { Fireflies } from "./fireflies";
import { door } from "@/utils/sounds";

interface HeroProps {
  loading: boolean;
  setEntrance: React.Dispatch<React.SetStateAction<boolean>>;
  setAmbientToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Hero: React.FC<HeroProps> = ({
  loading,
  setEntrance,
  setAmbientToggle,
}) => {
  const [showButton, setShowButton] = useState(false);
  const [entering, setEntering] = useState(false);
  const [zoomDone, setZoomDone] = useState(false);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setShowButton(true), 500);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  const handleEnter = () => {
    setEntering(true);
    door.play();
    setTimeout(() => {
      setZoomDone(true);
      setEntrance(true);
      setAmbientToggle(true);
    }, 500);
  };

  return (
    <section
      className={`relative w-full h-screen flex flex-col justify-center items-center overflow-hidden transition-transform ${
        zoomDone ? "hidden" : ""
      }`}
    >
      <div
        className={`absolute inset-0 bg-[url('@/public/door.png')] bg-cover bg-center transition-transform duration-1500 ${
          entering ? "scale-150" : "scale-100"
        }`}
      />

      <Fireflies />

      {loading && <SpinnerLoading size={60} color="text-purple-400" />}

      {!loading && showButton && !entering && (
        <button
          onClick={handleEnter}
          className="mt-10 px-10 py-4 rounded-2xl bg-black/70 backdrop-blur-sm border border-white/10 
                     text-purple-300 font-semibold text-lg shadow-[0_0_25px_-5px_rgba(120,80,200,0.3)]
                     hover:bg-purple-700/30 hover:scale-105 hover:shadow-[0_0_30px_rgba(180,100,255,0.6)]
                     transition-all duration-700 ease-out cursor-pointer z-30 animate-fadeIn"
        >
          Enter the House
        </button>
      )}

      <h1
        className="relative text-5xl md:text-7xl font-bold text-purple-300 
                   drop-shadow-[0_0_12px_rgba(180,100,255,0.6)] text-center z-30 
                   tracking-wide animate-fadeInSlow"
      >
        Welcome to the Witch’s House
      </h1>
    </section>
  );
};
