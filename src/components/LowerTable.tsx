import Actinides from "@/components/Rows/Actinides";
import Lanthanide from "@/components/Rows/Lanthanide";

const LowerTable = () => {
  return (
    <div className="flex relative justify-start items-center flex-col text-text_primary mt-1 gap-1.5 overflow-scroll">
      <Lanthanide />
      <Actinides />
    </div>
  );
};

export default LowerTable;
