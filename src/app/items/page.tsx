import { fetchItemList, fetchVersion } from "@/utils/serverApi";

//SSG
const ItemsPage = async () => {
  const version = await fetchVersion();
  const items = await fetchItemList(version);

  return (
    <>
      {items?.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </>
  );
};

export default ItemsPage;
