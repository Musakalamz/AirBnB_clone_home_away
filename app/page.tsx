import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";

type SearchParamsProps = {
  searchParams: { category?: string; search?: string };
};

async function HomePage({ searchParams }: SearchParamsProps) {
  const params = await searchParams;
  console.log(params);

  return (
    <section>
      <CategoriesList category={params?.category} search={params?.search} />

      <PropertiesContainer
        category={params?.category}
        search={params?.search}
      />
    </section>
  );
}

export default HomePage;
