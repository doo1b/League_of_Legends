export type Champion = {
  version: string; //버전 정보
  id: string; //영어 이름
  key: string; //ID값
  name: string; //한글 이름
  title: string; //간단 소개
  blurb: string; //자세한 소개
  info: {
    attack: number; //공격력
    defense: number; //방어력
    magic: number; //주문력
    difficulty: number; //난이도
  };
  image: {
    full: string; //이미지 주소
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  tags: string[]; //구분(태그)
  partype: string; //사용 스태미나
  stats: {
    hp: number; //체력
    hpperlevel: number; //성장체력
    mp: number; //마나
    mpperlevel: number; //성장마나
    movespeed: number; //이동속도
    armor: number; //방어력
    armorperlevel: number;
    spellblock: number; //마법저항력
    spellblockperlevel: number;
    attackrange: number; //사거리
    hpregen: number; //체력 재생
    hpregenperlevel: number;
    mpregen: number; //마나 재생
    mpregenperlevel: number;
    crit: number; //크리티컬
    critperlevel: number;
    attackdamage: number; //공격력
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number; //공격속도
  };
};

export type ChampionDetail = {
  id: string; //영어이름
  key: number; //고유 id
  name: string; //한글이름
  title: string; //한줄소개
  image: {
    full: string; //이미지 주소
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  lore: string; //긴 설명
  allytips: string[]; //잘하는팁
  enemytips: string[]; //상대하는팁
  tags: string[]; //분류
  partype: string; //사용 스태미나
  info: {
    attack: number; //공격력
    defense: number; //방어력
    magic: number; //주문력
    difficulty: number; //난이도
  };
  stats: {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
  };
  spells: ChampionSpells[];
  passive: {
    name: string; //패시브이름
    description: string; //패시브설명
    image: string;
  };
};

export type OriginalChampionSpells = {
  id: string; //스킬id
  name: string; //스킬이름
  description: string; //간단설명
  image: {
    full: string; //사진주소
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
};

export type ChampionSpells = {
  id: string; //스킬id
  name: string; //스킬이름
  description: string; //간단설명
  image: string;
};
