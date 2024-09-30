"use server";

export const getItems = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/{version}/data/ko_KR/item.json"
  );
  const items = res.json();

  return items;
};
