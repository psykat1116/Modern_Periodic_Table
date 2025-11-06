import Graph from "@/components/Graph";
import data from "@/constant/GraphData/BoilingPoint";

const Page = () => {
  return (
    <Graph
      data={data}
      title="Boiling Point (℃)"
      description="Temperature where a liquid's vapor pressure equals external
          pressure, causing transition to gas phase under standard conditions."
    />
  );
};

export default Page;
