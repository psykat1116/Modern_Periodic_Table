export default function pickColors(category: string) {
  switch (category) {
    case "metal":
      return "before:bg-[#cd853f]";
      break;
    case "nonmetal":
      return "before:bg-[#f08080]";
      break;
    case "metalloid":
      return "before:bg-[#008080]";
      break;
    case "halogen":
      return "before:bg-[#6b8e23]";
      break;
    case "noblegases":
      return "before:bg-[#9acd32]";
      break;
    case "transition":
      return "before:bg-[#cd3e20]";
      break;
    case "transactinides":
      return "before:bg-[#913856]";
      break;
    case "lanthanides":
      return "before:bg-[#ff69b4]";
      break;
    case "actinides":
      return "before:bg-[#28a128]";
      break;
    case "alkali":
      return "before:bg-[#556199]";
      break;
    case "alkaliearth":
      return "before:bg-[#739f46]";
      break;
    default:
      break;
  }
}
