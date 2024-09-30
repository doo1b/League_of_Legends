// 원본 아이템 데이터 타입
interface ItemImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface ItemGold {
  base: number;
  purchasable: boolean;
  total: number;
  sell: number;
}

interface ItemStats {
  FlatMovementSpeedMod: number;
}

interface ItemMaps {
  [mapId: string]: boolean;
}

// 원본 데이터 타입
interface Item {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: ItemImage;
  gold: ItemGold;
  tags: string[];
  maps: ItemMaps;
  stats: ItemStats;
}

export default Item;
