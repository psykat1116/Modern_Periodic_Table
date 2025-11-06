import Graph from "@/components/Graph";
import data from "@/constant/GraphData/SoundSpeed";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Sound Speed (m/s)"
      description="Speed at which sound waves travel through a medium, depending on
          material elasticity and density."
    />
  );
};

export default Page;
