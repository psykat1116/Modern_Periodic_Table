import Graph from "@/components/Graph";
import data from "@/constant/GraphData/AtomicRadius";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Atomic Radius (Pm)"
      description="Distance from an atom's nucleus to its outermost electron shell,
          influencing chemical bonding and element properties."
    />
  );
};

export default Page;
