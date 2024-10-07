"use client";

import Image from "next/image";
import React, { useState } from "react";
import TopArrow from "./TopArrow";
import { ChampionDetail } from "@/types/Champion";

type Props = {
  detailChampion: ChampionDetail;
};

const ChampionSpells = ({ detailChampion }: Props) => {
  const [isHoverd, setIsHoverd] = useState<string | null>(null);
  const handleHover = (spell: string | null) => {
    setIsHoverd(spell);
  };
  return (
    <>
      <div className="flex flex-row justify-around">
        <div
          className="text-center"
          onMouseEnter={() => handleHover("passive")}
          onMouseLeave={() => handleHover(null)}
        >
          {/* 패시브 이미지 */}
          <Image
            src={detailChampion.passive.image}
            alt={detailChampion.passive.name}
            width={40}
            height={40}
            className="spellImage"
          />
          <p className="spellName relative">
            P
            {isHoverd === "passive" && (
              <div className="absolute flex flex-col items-center left-1/2 -translate-x-1/2 font-normal text-xs top-4">
                <TopArrow />
                <div className="w-max bg-deepBlue text-white px-4 py-2 rounded-lg">
                  {detailChampion.passive.name}
                </div>
              </div>
            )}
          </p>
        </div>
        {/* 스킬 이미지 */}
        {detailChampion.spells.map((spell, idx) => (
          <div
            key={spell.name}
            className="text-center"
            onMouseEnter={() => handleHover(spell.id)}
            onMouseLeave={() => handleHover(null)}
          >
            <Image
              src={spell.image}
              alt={`${spell.id}`}
              width={40}
              height={40}
              className="spellImage"
            />
            <p className="spellName relative">
              {idx === 0 ? "Q" : idx === 1 ? "W" : idx === 2 ? "E" : "R"}
              {/* 모달창 부분 */}
              {spell.id === isHoverd && (
                <div className="absolute flex flex-col items-center left-1/2 -translate-x-1/2 font-normal text-xs top-4">
                  <TopArrow />
                  <div className="w-72 bg-deepBlue text-white px-4 py-2 rounded-lg">
                    {spell.description}
                  </div>
                </div>
              )}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChampionSpells;
