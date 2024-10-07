import { fetchItemList } from "@/utils/serverApi";
import Image from "next/image";

//SSG
const ItemsPage = async () => {
  const items = await fetchItemList();

  //갱플랭크 스킬 아이템 이름 수정을 위한 함수
  const formatItemName = (str: string) => {
    const withLineBreaks = str.replace(/<br\s*\/?>/gi, "\n");
    const withoutTags = withLineBreaks.replace(/<\/?[^>]+(>|$)/g, "");
    return withoutTags;
  };

  //아이템 설명에 섞여있는 태그 제거
  const removeHTMLTags = (str: string) => {
    return str.replace(/<\/?[^>]+(>|$)/g, "");
  };

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 mx-20 my-10 justify-items-center">
        {items?.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-center w-[250px] px-5 py-5 gap-1 boxBorder"
            >
              <Image
                src={item.image.full}
                alt={`${item.id}-${item.name}`}
                width={50}
                height={50}
                className="rounded-md"
              />
              <p className="font-semibold whitespace-pre-wrap">
                {formatItemName(item.name)}
              </p>
              <p className="text-xs font-bold text-deepGold">
                {item.gold.total} 골드
              </p>
              <p className="text-sm">{removeHTMLTags(item.plaintext)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemsPage;
