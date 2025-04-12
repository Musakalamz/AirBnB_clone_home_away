import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/Buttons";
import { fetchFavoriteId } from "@/utils/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";

export default async function FavoriteToggleButton({
  propertyId,
}: {
  propertyId: string;
}) {
  const favoriteId = await fetchFavoriteId({ propertyId });

  const { userId } = auth();
  if (!userId) return <CardSignInButton />;

  return <FavoriteToggleForm favoriteId={favoriteId} propertyId={propertyId} />;
}
