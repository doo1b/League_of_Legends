import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center my-10 gap-y-12">
      <div className="text-center">
        <Image
          alt="로테이션 바로가기"
          className="rounded-xl mb-2"
          width={500}
          height={295}
          src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yuumi_19.jpg"
        />
        <span className="text-xl font-bold border-b-4 border-lightGold">
          금주 로테이션
        </span>
      </div>
      <div className="text-center">
        <Image
          src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_38.jpg"
          alt="챔피언 목록 바로가기"
          width={500}
          height={295}
          className="rounded-xl mb-2"
        />
        <span className="text-xl font-bold border-b-4 border-lightGold">
          챔피언 목록
        </span>
      </div>
      <div className="text-center">
        <Image
          src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_17.jpg"
          alt="아이템 목록 바로가기"
          width={500}
          height={295}
          className="rounded-xl mb-2"
        />
        <span className="text-xl font-bold border-b-4 border-lightGold">
          아이템 목록
        </span>
      </div>
    </div>
  );
}
