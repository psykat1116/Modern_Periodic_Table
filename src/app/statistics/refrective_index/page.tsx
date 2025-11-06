import Graph from "@/components/Graph";
import data from "@/constant/GraphData/RefractiveIndex";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Refractive Index"
      description="Ratio of light speed in vacuum to material, affecting optical
          properties like bending and reflection."
    />
  );
};

export default Page;
