"use server";

import Item from "@/types/Item";

export const fetchVersion = async (): Promise<string> => {
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

export const fetchItemList = async (version: string): Promise<ItemWithId[]> => {
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
