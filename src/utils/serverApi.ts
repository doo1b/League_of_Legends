"use server";

import { Champion } from "@/types/Champion";
import Item from "@/types/Item";
import next from "next";

const fetchVersion = async (): Promise<string> => {
  try {
    const res = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    const versionList: string[] = await res.json();
    return versionList[0];
  } catch (error) {
    console.error("Error fetching versions:", error);
    throw error;
  }
};

export interface ItemWithId extends Item {
  id: string; // 아이템 ID 추가
}

export const fetchItemList = async (): Promise<ItemWithId[]> => {
  const version = await fetchVersion();

  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`
  );

  const data = await res.json();

  const items: ItemWithId[] = Object.entries(data.data).map(([id, item]) => ({
    ...(item as Item),
    id,
  }));

  return items;
};

export const fetchChampionList = async (): Promise<Champion[]> => {
  const version = await fetchVersion();

  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
    {
      next: {
        revalidate: 86400,
      },
    }
  );

  const data = await res.json();

  const champions: Champion[] = Object.values(data.data) as Champion[];
  const championList = champions.map((champion: Champion) => ({
    ...champion,
    image: {
      ...champion.image,
      full: `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`,
    },
  }));

  return championList;
};
