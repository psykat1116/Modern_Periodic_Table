import Graph from "@/components/Graph";
import data from "@/constant/GraphData/ElectronAffinity";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Electron Affinity (kJ/mol)"
      description="Energy change when an atom gains an electron, indicating its tendency
          to form negative ions."
    />
  );
};

export default Page;
