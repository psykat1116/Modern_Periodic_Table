import Graph from "@/components/Graph";
import data from "@/constant/GraphData/MeltingPoint";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Melting Point (℃)"
      description="Temperature at which a solid becomes a liquid, determined by
          intermolecular forces and material structure."
    />
  );
};

export default Page;
