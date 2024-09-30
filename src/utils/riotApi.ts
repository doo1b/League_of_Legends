export const getChampionRotation = async () => {
  try {
    const res = await fetch("/api/rotation");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
