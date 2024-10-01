"use client";

import { Champion } from "@/types/Champion";
import ChampionRotation from "@/types/ChampionRotation";
import { getChampionRotation } from "@/utils/riotApi";
import { fetchChampionList } from "@/utils/serverApi";
import { useEffect, useState } from "react";

//CSR
const RotationPage = () => {
  const [rotation, setRotation] = useState<Champion[] | null>(null);
  const [error, setError] = useState<string | null>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRotation = async () => {
      try {
        const data: ChampionRotation = await getChampionRotation();
        const champions = await fetchChampionList();
        const rotationChampions: Champion[] = champions.filter((champion) =>
          data.freeChampionIds.includes(Number(champion.key))
        );
        setRotation(rotationChampions);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRotation();
  }, []);

  if (error) {
    return <div>에러 발생</div>;
  }

  if (loading) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      {rotation?.map((champion: Champion) => (
        <div key={champion.key}>
          <p>{champion.name}</p>
        </div>
      ))}
    </>
  );
};

export default RotationPage;
