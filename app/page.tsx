import LoadingCards from "@/components/card/LoadingCards";
import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";
import { Suspense } from "react";

type SearchParamsProps = {
  searchParams: Promise<{ category?: string; search?: string }>;
};

async function HomePage({ searchParams }: SearchParamsProps) {
  const { category, search } = await searchParams;

  return (
    <section>
      <CategoriesList category={category} search={search} />

      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer category={category} search={search} />
      </Suspense>
    </section>
  );
}

export default HomePage;
