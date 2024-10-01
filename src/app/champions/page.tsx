import { fetchChampionList } from "@/utils/serverApi";
import Image from "next/image";

// ISR
const ChampionsPage = async () => {
  const champions = await fetchChampionList();

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-10 justify-items-center mx-20 my-10">
        {champions.map((champion) => (
          <div
            key={champion.key}
            className="flex flex-col items-center w-[200px] border-2 rounded-lg"
          >
            <p>{champion.name}</p>
            <Image
              className="mx-3"
              alt={`${champion.name}초상화`}
              width={100}
              height={100}
              src={champion.image.full}
            ></Image>
            <p>{champion.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChampionsPage;
