import Graph from "@/components/Graph";
import data from "@/constant/GraphData/NeelPoint";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Neel Point (K)"
      description="Temperature where antiferromagnetic materials lose magnetism,
          transitioning to paramagnetism."
    />
  );
};

export default Page;
