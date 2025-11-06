import Graph from "@/components/Graph";
import data from "@/constant/GraphData/AtomicWeight";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Atomic Weight (amu)"
      description="Average mass of an element's atoms, considering isotope
          distribution, used for chemical calculations and molecular weight
          determination."
    />
  );
};

export default Page;
