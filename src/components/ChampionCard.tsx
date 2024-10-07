import { Champion } from "@/types/Champion";
import { tagToColor, translateTag } from "@/utils/translateTag";
import Image from "next/image";
import Link from "next/link";

type ChampionCardProps = {
  champion: Champion;
};

const ChampionCard = ({ champion }: ChampionCardProps) => {
  return (
    <Link href={`/champions/${champion.id}`} key={champion.key}>
      <div className="flex flex-col items-center w-[350px] boxBorder py-4">
        <p className="text-xl font-bold">{champion.name}</p>
        <p className="text-sm text-deepGold">{champion.id}</p>
        <Image
          className="my-3 rounded-md shadow-[0_0_3px_1px] shadow-deepGold"
          alt={`${champion.name} 초상화`}
          width={100}
          height={100}
          src={champion.image.full}
        />
        <p className="font-semibold">{champion.title}</p>
        <div className="text-xs flex flex-row gap-x-2 mt-1 font-medium">
          {champion.tags.map((tag) => {
            const krTag = translateTag(tag);
            return (
              <p
                className="px-1 leading-normal rounded-sm"
                style={{ backgroundColor: tagToColor(tag) }}
                key={`${champion.id}-${tag}`}
              >
                {krTag}
              </p>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default ChampionCard;
