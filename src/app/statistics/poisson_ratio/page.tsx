import Graph from "@/components/Graph";
import data from "@/constant/GraphData/PoissonRatio";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Poisson Ratio"
      description="Ratio of lateral strain to axial strain under stress, describing
          material deformation behavior."
    />
  );
};

export default Page;
