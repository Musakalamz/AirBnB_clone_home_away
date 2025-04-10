import React from "react";

type PropertiesContainerProps = {
  category?: string;
  search?: string;
};

export default function PropertiesContainer({
  category,
  search,
}: PropertiesContainerProps) {
  return <div>Properties Container</div>;
}
