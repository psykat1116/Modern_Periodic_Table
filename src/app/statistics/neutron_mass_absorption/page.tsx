import Graph from "@/components/Graph";
import data from "@/constant/GraphData/NeutronMassAbsorption";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Neutron Mass Absorption"
      description="Measure of material's ability to absorb neutron mass, crucial for
          nuclear reactor safety."
    />
  );
};

export default Page;
