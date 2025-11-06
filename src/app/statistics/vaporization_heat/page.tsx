import Graph from "@/components/Graph";
import data from "@/constant/GraphData/VaporizationHeat";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Vaporization Heat (kJ/mol)"
      description="Energy needed to convert liquid into gas at its boiling point without
          temperature change."
    />
  );
};

export default Page;
