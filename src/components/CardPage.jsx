import React from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
const CardPage = () => {
  const { title } = useParams();

  // Normalize the title to handle potential case differences
  const normalizedTitle = title ? title.toLowerCase() : "";

  let content;
  if (normalizedTitle === "indoor") {
    content = <Card />; // Render the Card component for "Indoor" category
  } else {
    // Placeholder for other categories or a "Not Found" message
    content = (
      <div className="w-full text-center py-20 text-4xl font-bold">
        <h1>{title} Plants Category Coming Soon!</h1>
        <p className="text-xl mt-4">
          We are working on adding more plant categories.
        </p>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default CardPage;
