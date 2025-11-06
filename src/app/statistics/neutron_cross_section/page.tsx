import Graph from "@/components/Graph";
import data from "@/constant/GraphData/NeutronCrossSection";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Neutron Cross Section"
      description="Probability of neutron interaction with a nucleus, influencing nuclear
          reactions and shielding materials."
    />
  );
};

export default Page;
