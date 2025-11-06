import Graph from "@/components/Graph";
import data from "@/constant/GraphData/IonizationEnergy";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Ionization Energy (kJ/mol)"
      description="Minimum energy needed to remove an atom's outermost electron,
          determining chemical reactivity and bonding behavior."
    />
  );
};

export default Page;
