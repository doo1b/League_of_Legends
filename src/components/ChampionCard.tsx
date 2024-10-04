import { Champion } from "@/types/Champion";
import { translateTag } from "@/utils/translateTag";
import Image from "next/image";
import Link from "next/link";

type ChampionCardProps = {
  champion: Champion;
};

const ChampionCard = ({ champion }: ChampionCardProps) => {
  return (
    <Link href={`/champions/${champion.id}`} key={champion.key}>
      <div className="flex flex-col items-center w-[400px] border-[1px]  border-lightGold rounded-md  gap-2 py-3">
        <p className="text-lg font-bold">{champion.name}</p>
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
  );
};

export default ChampionCard;
