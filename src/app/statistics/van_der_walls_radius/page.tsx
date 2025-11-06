import Graph from "@/components/Graph";
import data from "@/constant/GraphData/VanDerWallsRadius";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Van Der Walls Radius (Pm)"
      description="Effective size of an atom in non-bonded interactions, impacting
          molecular structure and intermolecular forces."
    />
  );
};

export default Page;
