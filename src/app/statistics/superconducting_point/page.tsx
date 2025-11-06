import Graph from "@/components/Graph";
import data from "@/constant/GraphData/SuperconductingPoint";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Superconducting Point (K)"
      description="Zero electrical resistance and expulsion of magnetic fields in certain
          materials below critical temperature."
    />
  );
};

export default Page;
