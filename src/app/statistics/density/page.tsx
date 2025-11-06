import Graph from "@/components/Graph";
import data from "@/constant/GraphData/Density";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Density (Kg / m3)"
      description="Mass per unit volume of a substance, affecting buoyancy, stability,
          and material selection."
    />
  );
};

export default Page;
