import React from "react";
import { Link } from "react-router-dom";
import { GoDot } from "react-icons/go";
import { ImPacman } from "react-icons/im";
import { BiSolidLeftArrow } from "react-icons/bi";
import { FaSpaghettiMonsterFlying } from "react-icons/fa6";

function ErrorPage() {
  const topWalls = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 70, 71, 72];
  const leftWalls = [20, 30, 40, 50, 80, 90];
  const rightWalls = [29, 39, 59, 85, 99];
  const cells = Array.from({ length: 120 });

  return (
    <main className=" bg-[#0b1326] text-amber-50 p-6 w-[90%] mx-auto mt-20">
      {/* Header */}
      <div className=" mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 cursor-pointer">
        <h1 className="text-5xl md:text-7xl font-bold">Error 404</h1>

        <Link
          to="/"
          className="border-4 border-emerald-500 px-6 py-3 text-xl hover:bg-emerald-500 hover:text-black transition"
        >
          GO BACK
        </Link>
      </div>

      {/* Maze */}
      <div className="relative  mx-auto mt-12 border-20 border-emerald-500 p-4">
        {/* Big 404 */}
        <h1 className="absolute inset-0 flex items-center justify-center text-red-600 text-7xl md:text-9xl font-black pointer-events-none z-10">
          404
        </h1>

        <div className="grid grid-cols-10 md:grid-cols-12 gap-2">
          {cells.map((_, i) => (
            <div
              key={i}
              className={`
                h-20 w-15 flex items-center justify-center
                ${topWalls.includes(i) ? "border-t-10 border-emerald-500" : ""}
                ${leftWalls.includes(i) ? "border-l-10 border-emerald-500" : ""}
                ${rightWalls.includes(i) ? "border-r-10 border-emerald-500" : ""}
              `}
            >
              {i === 55 || i === 30 ? (
                <ImPacman className="text-amber-400 text-4xl" />
              ) : i === 23 || i === 45 || i === 10 || i === 80 || i === 60 ? (
                <FaSpaghettiMonsterFlying className="text-amber-400 text-5xl" />
              ) : (
                <GoDot className="text-amber-50 bg-amber-50 h-5 w-5 rounded-full" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className=" mt-5 flex justify-between items-center">
        <div className="flex gap-5">
          <ImPacman className="text-amber-400 h-15 w-15" />
          <ImPacman className="text-amber-400 h-15 w-15" />
          <ImPacman className="text-amber-400 h-15 w-15" />
        </div>
        <div className="flex items-center justify-center">
          <h2 className="mt-8  font-mono text-2xl md:text-4xl">Score: 100</h2>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 my-10">
        <div className="h-20 w-20 bg-gray-500 rounded-t-xl flex items-center justify-center">
          <BiSolidLeftArrow className="w-10 h-10 rotate-90 text-[#00687A]" />
        </div>

        <div className="flex gap-2">
          <div className="h-20 w-20 bg-gray-500 rounded-l-xl flex items-center justify-center">
            <BiSolidLeftArrow className="w-10 h-10 text-[#00687A]" />
          </div>

          <div className="h-20 w-20 bg-gray-500 flex items-center justify-center">
            <BiSolidLeftArrow className="w-10 h-10 rotate-[270deg] text-[#00687A]" />
          </div>

          <div className="h-20 w-20 bg-gray-500 rounded-r-xl flex items-center justify-center">
            <BiSolidLeftArrow className="w-10 h-10 rotate-180 text-[#00687A]" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ErrorPage;
