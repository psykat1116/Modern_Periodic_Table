import Graph from "@/components/Graph";
import data from "@/constant/GraphData/Electronegativity";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Electronegativity"
      description="Atom's ability to attract shared electrons in a chemical bond,
          influencing molecule polarity and reactivity."
    />
  );
};

export default Page;
