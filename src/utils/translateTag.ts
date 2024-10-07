export const translateTag = (tag: string) => {
  switch (tag.toLowerCase()) {
    case "fighter":
      return "전사";
    case "mage":
      return "마법사";
    case "assassin":
      return "암살자";
    case "tank":
      return "탱커";
    case "marksman":
      return "원거리딜러";
    case "support":
      return "서포터";
    default:
      return "챔피언";
  }
};

export const tagToColor = (tag: string) => {
  switch (tag.toLowerCase()) {
    case "fighter":
      return "rgba(163, 29, 0, 0.2)";
    case "mage":
      return "rgba(152, 0, 163, 0.2)";
    case "assassin":
      return "rgba(16, 2, 69, 0.2)";
    case "tank":
      return "rgba(163, 152, 0, 0.2)";
    case "marksman":
      return "rgba(0, 163, 153, 0.2)";
    case "support":
      return "rgba(13, 163, 0, 0.2)";
    default:
      return "#000000";
  }
};
