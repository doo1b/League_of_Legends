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
              className="flex flex-col items-center border-2 w-[250px] px-5 py-5 gap-1"
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
              {/* <p className="text-xs font-semibold text-midBlue">
                {item.into ? "상위 아이템" : "상위 아이템이 없습니다"}
              </p>
              <div className="flex flex-row flex-wrap gap-2">
                {item.into?.map((subItem: string) =>
                  items
                    .filter((i) => i.id === subItem)
                    .map((sub) => (
                      <Image
                        src={sub.image.full}
                        alt={`${item.name}-상위 아이템-${sub.name}`}
                        key={`${item.name}-상위 아이템-${sub.name}`}
                        width={25}
                        height={25}
                      />
                    ))
                )}
              </div> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemsPage;
