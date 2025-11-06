import Graph from "@/components/Graph";
import data from "@/constant/GraphData/FusionHeat";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Fusion Heat (kJ/mol)"
      description="Energy required to convert a solid to liquid at its melting point
          without temperature change."
    />
  );
};

export default Page;
