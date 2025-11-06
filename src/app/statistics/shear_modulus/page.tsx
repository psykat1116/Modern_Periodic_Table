import Graph from "@/components/Graph";
import data from "@/constant/GraphData/ShearModulus";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Shear Modulus (MPa)"
      description="Measure of material's resistance to shear stress, affecting
          elasticity and mechanical stability."
    />
  );
};

export default Page;
