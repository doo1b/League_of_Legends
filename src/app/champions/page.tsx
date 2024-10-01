import { fetchChampionList } from "@/utils/serverApi";
import { translateTag } from "@/utils/translateTag";
import Image from "next/image";
import Link from "next/link";

// ISR
const ChampionsPage = async () => {
  const champions = await fetchChampionList();

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-10 justify-items-center mx-20 my-10">
        {champions.map((champion) => (
          <Link href={`/champions/${champion.id}`} key={champion.key}>
            <div className="flex flex-col items-center w-[400px] border-2 gap-2 py-3">
              <p>{champion.name}</p>
              <Image
                className="mx-3"
                alt={`${champion.name} 초상화`}
                width={100}
                height={100}
                src={champion.image.full}
              />
              <p>{champion.title}</p>
              <p className="text-sm font-semibold">
                {champion.tags.map((tag) => {
                  const krTag = translateTag(tag);
                  return (
                    <span className="px-1" key={`${champion.id}-${tag}`}>
                      {krTag}
                    </span>
                  );
                })}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ChampionsPage;
