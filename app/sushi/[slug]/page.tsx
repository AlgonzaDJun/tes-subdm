import React from "react";

export default async function SushiPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <p>This is the page for sushi detail : ( {params.slug})</p>
      {/* Add more restaurant details and functionality here */}
    </div>
  );
}
