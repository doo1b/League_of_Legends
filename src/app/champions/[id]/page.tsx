import { fetchChampionDetail } from "@/utils/serverApi";
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

  return <></>;
};

export default ChampionDetailPage;
