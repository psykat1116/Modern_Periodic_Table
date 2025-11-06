import Graph from "@/components/Graph";
import data from "@/constant/GraphData/LiquidDensity";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Liquid Density (Kg/m3)"
      description="Liquid density is a measure of how heavy a liquid is for its volume."
    />
  );
};

export default Page;
