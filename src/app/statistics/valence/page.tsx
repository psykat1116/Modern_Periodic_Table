import Graph from "@/components/Graph";
import data from "@/constant/GraphData/Valence";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Valence"
      description="Number of electrons an atom can share, gain, or lose in chemical
          bonding."
    />
  );
};

export default Page;
