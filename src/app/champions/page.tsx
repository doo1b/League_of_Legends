import ChampionCard from "@/components/ChampionCard";
import { Champion } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";

// ISR
const ChampionsPage = async () => {
  const champions = await fetchChampionList();

  return (
    <>
      <div className="championListBox">
        {champions.map((champion: Champion) => (
          <ChampionCard champion={champion} key={champion.id}></ChampionCard>
        ))}
      </div>
    </>
  );
};

export default ChampionsPage;
