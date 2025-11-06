import Graph from "@/components/Graph";
import data from "@/constant/GraphData/YoungModulus";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Young Modulus (GPa)"
      description="Measure of material stiffness, representing resistance to elastic
          deformation under tensile stress."
    />
  );
};

export default Page;
