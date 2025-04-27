import Actinides from "@/components/Rows/Actinides";
import Lanthanide from "@/components/Rows/Lanthanide";

const LowerTable = () => {
  return (
    <div className="mt-10 text-text_primary flex flex-col items-end w-full gap-1.5">
      <Lanthanide />
      <Actinides />
    </div>
  );
};

export default LowerTable;
