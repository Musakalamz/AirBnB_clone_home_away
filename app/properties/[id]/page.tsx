import { fetchPropertyDetails } from "@/utils/actions";
import { redirect } from "next/navigation";

export default async function page({ params }: { params: { id: string } }) {
  const property = await fetchPropertyDetails(params.id);
  if (!property) redirect("/");

  const { baths, bedrooms, beds, guests } = property;
  const details = { baths, bedrooms, beds, guests };

  return <div>PropertyDetailsPage</div>;
}
