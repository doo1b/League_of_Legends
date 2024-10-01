import { fetchItemList } from "@/utils/serverApi";

//SSG
const ItemsPage = async () => {
  const items = await fetchItemList();

  return (
    <>
      {items?.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </>
  );
};

export default ItemsPage;
