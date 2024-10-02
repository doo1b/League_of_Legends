import { fetchChampionDetail } from "@/utils/serverApi";
import { translateTag } from "@/utils/translateTag";
import Image from "next/image";

// SSG
const ChampionDetailPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const detailChampion = await fetchChampionDetail(params.id);

  return (
    <div className="flex flex-row items-center justify-center my-10">
      <div className="flex flex-col w-[400px] gap-y-5">
        <div className="justify-end gap-x-2 flex flex-row items-end">
          <p className="px-2 border-r-2 border-lightGold leading-none text-xl font-bold">
            {detailChampion.name}
          </p>
          {detailChampion.tags.map((tag) => (
            <p key={tag} className="text-sm font-semibold leading-none">
              {translateTag(tag)}
            </p>
          ))}
        </div>
        <p className="text-sm text-justify">{detailChampion.lore}</p>
        <div className="flex flex-row justify-around">
          <div className="text-center">
            <Image
              src={detailChampion.passive.image}
              alt={detailChampion.passive.name}
              width={40}
              height={40}
              className="rounded-md mx-2"
            />
            <p>P</p>
          </div>
          {detailChampion.spells.map((spell) => (
            <div key={spell.name} className="text-center">
              <Image
                src={spell.image}
                alt={`${spell.id}`}
                width={40}
                height={40}
                className="rounded-md mx-2"
              />
              <p>
                {spell.id.slice(
                  detailChampion.id.length,
                  detailChampion.id.length + 1
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Image
        src={detailChampion.image.full}
        alt={`${detailChampion.name} 일러스트`}
        width={500}
        height={400}
        className="aspect-[3/2] object-cover ml-10 rounded-xl"
      ></Image>
    </div>
  );
};

export default ChampionDetailPage;
