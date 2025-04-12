import LoadingCards from "@/components/card/LoadingCards";
import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";
import { Suspense } from "react";

type SearchParamsProps = {
  searchParams: { category?: string; search?: string };
};

async function HomePage({ searchParams }: SearchParamsProps) {
  const params = await searchParams;
  console.log(params);

  return (
    <section>
      <CategoriesList category={params?.category} search={params?.search} />

      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer
          category={params?.category}
          search={params?.search}
        />
      </Suspense>
    </section>
  );
}

export default HomePage;
