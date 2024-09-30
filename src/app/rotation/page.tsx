"use client";

import ChampionRotation from "@/types/ChampionRotation";
import { getChampionRotation } from "@/utils/riotApi";
import { useEffect, useState } from "react";

//CSR
const RotationPage = () => {
  const [rotation, setRotation] = useState<ChampionRotation | null>(null);
  const [error, setError] = useState<string | null>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRotation = async () => {
      try {
        const data = await getChampionRotation();
        setRotation(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRotation();
  }, []);

  return <div>RotationPage</div>;
};

export default RotationPage;
