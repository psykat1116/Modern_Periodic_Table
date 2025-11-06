import Graph from "@/components/Graph";
import data from "@/constant/GraphData/BrinellHardness";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Brinell Hardness (MPa)"
      description="Measure of material's resistance to deformation, using a steel/
          tungsten carbide ball under load to create indentation."
    />
  );
};

export default Page;
