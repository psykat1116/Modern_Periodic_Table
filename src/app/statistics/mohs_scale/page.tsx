import Graph from "@/components/Graph";
import data from "@/constant/GraphData/MohsScale";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Mohs Scale"
      description="Qualitative scale ranking minerals by scratch resistance, ranging from
          talc (1) to diamond (10)."
    />
  );
};

export default Page;
