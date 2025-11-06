import Graph from "@/components/Graph";
import data from "@/constant/GraphData/CuriePoint";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Curie Point (K)"
      description="Temperature at which a material loses its permanent magnetic
          properties, transitioning to paramagnetism."
    />
  );
};

export default Page;
