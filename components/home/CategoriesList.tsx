import React from "react";

type CategoriesListProps = {
  category?: string;
  search?: string;
};

export default function CategoriesList({
  category,
  search,
}: CategoriesListProps) {
  return <div> Categories List</div>;
}
