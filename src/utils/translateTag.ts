export const translateTag = (tag: string) => {
  switch (tag) {
    case "Fighter":
      return "전사";
    case "Mage":
      return "마법사";
    case "Assassin":
      return "암살자";
    case "Tank":
      return "탱커";
    case "Marksman":
      return "원거리딜러";
    case "Support":
      return "서포터";
    default:
      return "챔피언";
  }
};
