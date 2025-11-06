import Graph from "@/components/Graph";
import data from "@/constant/GraphData/ThermalConductivity";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Thermal Conductivity (W/m*K)"
      description="Material's ability to transfer heat, influencing insulation and
          cooling system efficiency."
    />
  );
};

export default Page;
