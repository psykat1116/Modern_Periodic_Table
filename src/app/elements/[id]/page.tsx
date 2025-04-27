import Main from "@/components/Main";
import getElementData from "@/helper/getElementData";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const data = getElementData(parseInt(params.id));

  return {
    title: `Element No ${data?.general_properties.atomic_number} - ${data?.general_properties.name} (${data?.general_properties.symbol})`,
    description: `${data?.description}`,
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: `https://modern-periodic-table.vercel.app/elements/${params.id}`,
      title: `Element No ${data?.general_properties.atomic_number} - ${data?.general_properties.name} (${data?.general_properties.symbol})`,
      description: `${data?.description}`,
      images: [
        {
          url: `https://modern-periodic-table.vercel.app/image${data?.general_properties.image}`,
          width: 800,
          height: 600,
          alt: `Element No ${data?.general_properties.atomic_number} - ${data?.general_properties.name} (${data?.general_properties.symbol})`,
        },
      ],
    },
  };
}

const Page = () => {
  return <Main />;
};

export default Page;
