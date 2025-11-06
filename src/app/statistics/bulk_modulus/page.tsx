import Graph from "@/components/Graph";
import data from "@/constant/GraphData/BulkModulus";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Bulk Modulus (GPa)"
      description="Material's resistance to uniform compression, representing how
          incompressible a substance is under applied pressure."
    />
  );
};

export default Page;
