import Graph from "@/components/Graph";
import data from "@/constant/GraphData/SpecificHeat";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Specific Heat (J/Kg*K)"
      description="Heat required to raise a unit mass's temperature by one degree,
          indicating thermal capacity."
    />
  );
};

export default Page;
