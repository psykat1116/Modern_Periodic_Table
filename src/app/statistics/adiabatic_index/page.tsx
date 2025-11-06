import Graph from "@/components/Graph";
import data from "@/constant/GraphData/AdiabaticIndex";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Adiabatic Index"
      description="Ratio of specific heats, indicating how gases expand or compress
          without heat exchange, affecting thermodynamic processes."
    />
  );
};

export default Page;
