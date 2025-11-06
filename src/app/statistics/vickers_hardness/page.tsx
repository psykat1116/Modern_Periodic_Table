import Graph from "@/components/Graph";
import data from "@/constant/GraphData/VickersHardness";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Vickers Hardness (MPa)"
      description="Material hardness measured using a diamond pyramid indenter under
          load, assessing resistance to indentation."
    />
  );
};

export default Page;
