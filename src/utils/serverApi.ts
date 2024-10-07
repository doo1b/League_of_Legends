"use server";

import {
  Champion,
  ChampionDetail,
  ChampionSpells,
  OriginalChampionSpells,
} from "@/types/Champion";
import Item from "@/types/Item";
import { omit } from "lodash";

//버전 정보
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

//아이템 목록
export const fetchItemList = async (): Promise<ItemWithId[]> => {
  const version = await fetchVersion();

  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`
  );

  const data = await res.json();

  const items: ItemWithId[] = Object.entries(data.data).map(([id, item]) => ({
    ...(item as Item),
    id,
    image: {
      ...(item as Item).image,
      full: `https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${
        (item as Item).image.full
      }`,
    },
  }));

  return items;
};

//챔피언 목록
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
      // 이미지 불러오기 편하게 링크로 바로 수정
      full: `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`,
    },
  }));

  return championList;
};

// 챔피언 상세 정보
export const fetchChampionDetail = async (
  id: string
): Promise<ChampionDetail> => {
  const version = await fetchVersion();
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`
  );
  const data = await res.json();
  const champion = data.data[id];

  //불필요한 스킬정보 삭제
  const formattedSpells: ChampionSpells[] = champion.spells.map(
    (spell: OriginalChampionSpells) => ({
      id: spell.id,
      name: spell.name,
      description: spell.description,
      image: `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spell.image.full}`,
      cost: spell.costBurn,
      cooldownBurn: spell.cooldownBurn,
    })
  );

  //불필요한 키:밸류 삭제하고 스킬정보 변경
  const newChampion: ChampionDetail = {
    ...omit(champion, ["recommended", "blurb", "skins"]),
    spells: formattedSpells,
    image: {
      ...champion.image,
      //이미지 불러오기 편하게 링크 수정
      full: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`,
    },
    //패시브 이미지도 수정
    passive: {
      ...champion.passive,
      image: `https://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${champion.passive.image.full}`,
    },
  } as Omit<ChampionDetail, "recommended" | "blurb" | "skins">;

  return newChampion;
};
