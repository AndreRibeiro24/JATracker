import { useState } from "react";
import cardBack from "../assets/YuGiOh-Card-back.png";
import myPhoto from "../assets/andrePhoto.png"
export default function AboutMeCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex items-center justify-center py-20 bg-[#0b1326]">
      <div
        className="relative w-72 h-[26rem] [perspective:1600px] cursor-pointer"
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        <div
          className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]"
          style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          {/*backside card*/}
          <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl overflow-hidden shadow-[0_0_35px_rgba(0,0,0,0.5)]">
            <img
              src={cardBack}
              alt="Card back"
              className="w-full h-full object-cover"
            />
          </div>

          {/* frontside card*/}
          <div
            className="absolute inset-0 [backface-visibility:hidden] rounded-xl overflow-hidden border-[8px] border-[#1a1410] shadow-[0_0_35px_rgba(0,0,0,0.5)] flex flex-col p-2"
            style={{
              transform: "rotateY(180deg)",
              background:
                "radial-gradient(circle at 30% 20%, #f0a84a 0%, #d9821f 25%, #b8631a 55%, #8a4612 100%)",
            }}
          >
            <div className="flex items-center justify-between bg-gradient-to-b from-[#fff3d6] to-[#e8c478] rounded-sm px-2 py-1 border-2 border-[#3a2a10]">
              <span className="font-serif font-bold text-[#1a1130] text-[15px] italic tracking-wide truncate">
                Andre Ribeiro
              </span>
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffe27a] to-[#c99a2e] border border-[#3a2a10] flex items-center justify-center flex-shrink-0">
                <span className="text-[7px] font-bold text-[#3a2a10]">
                  CODE
                </span>
              </div>
            </div>


            <div className="flex justify-end gap-0.5 mt-1 mb-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className="w-3 h-3 rounded-full bg-gradient-to-br from-[#ffcf3d] to-[#c98a00] border border-[#3a2a10] inline-block"
                ></span>
              ))}
            </div>


            <div className="h-32 bg-gradient-to-br from-[#1a1130] via-[#2b1750] to-[#120a22] border-2 border-[#3a2a10] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
              <img src={myPhoto} alt="Andre Ribeiro" className="w-full h-full object-cover"/>
            </div>


            <div className="mt-1.5 bg-gradient-to-b from-[#e8c478] to-[#caa15a] border border-[#3a2a10] px-2 py-0.5">
              <span className="text-[#1a1130] text-[10px] font-mono font-bold tracking-wide">
                [Spellcaster / Effect] — Full-Stack Developer
              </span>
            </div>


            <div className="mt-1.5 flex-1 bg-[#f4ead1] border-2 border-[#3a2a10] px-2 py-1.5 overflow-y-auto">
              <p className="text-[#1a1130] text-[10.5px] leading-snug font-serif">
                When summoned, this developer gains{" "}
                <span className="font-bold">+500 ATK</span> for every cup of
                coffee consumed. Specializes in React, Node.js, and turning
                coffee into clean commits. Cannot be destroyed by scope creep
                — once per sprint, may negate a bug and draw a new feature.
              </p>
            </div>

            <div className="mt-1.5 flex justify-end gap-3 bg-gradient-to-b from-[#e8c478] to-[#caa15a] border border-[#3a2a10] px-2 py-1 font-mono text-[11px] text-[#1a1130] font-bold">
              <span>ATK/ 2600</span>
              <span>DEF/ 2100</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


