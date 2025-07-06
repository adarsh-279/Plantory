import React from 'react'
import PlantDetails from "../PlantDetails";

const PetFriendly = () => {
    const plantDetails = [
      {
        title: "Areca Palm",
        image:
          "https://eureka-farms.com/cdn/shop/files/07_PALM_ARECA_01.jpg?v=1747160168&width=1500",
        tips: "Thrives in filtered sunlight with regular watering.",
        tricks: "Wipe leaves to remove dust and keep them shiny.",
      },
      {
        title: "Spider Plant",
        image:
          "https://plantshub.in/wp-content/uploads/2023/06/5b59a7f8-e644-477e-99b4-8fd8f0e24ebb-jpg.webp",
        tips: "Grows well in hanging baskets in partial shade.",
        tricks: "Produces baby plants that can be repotted easily.",
      },
      {
        title: "Bamboo Palm",
        image:
          "https://gardengram.in/cdn/shop/products/areca-palm-bamboo-palm-plant-500x500.jpg?v=1708662622",
        tips: "Prefers indirect light and consistently moist soil.",
        tricks: "Also acts as a natural air purifier in outdoor patios.",
      },
      {
        title: "Calathea",
        image: "https://wildroots.in/wp-content/uploads/2022/09/makoyana.jpg",
        tips: "Needs shade and consistently moist soil.",
        tricks: "Great for pet-safe shaded garden corners or decks.",
      },
      {
        title: "Prayer Plant",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYhqxzx5jCM9sO8g5vEUl_6ficnhVRUaPXow&s",
        tips: "Prefers low light and high humidity environments.",
        tricks: "Leaves fold up at night — an attractive, safe choice.",
      },
      {
        title: "Polka Dot Plant",
        image:
          "https://www.healthyhouseplants.com/wp-content/uploads/2024/08/Polka-Dot-Plant.jpg",
        tips: "Thrives in partial sunlight and well-drained soil.",
        tricks: "Bright leaves make it ideal for colorful, safe borders.",
      },
      {
        title: "Boston Fern",
        image:
          "https://budsnblush.com/cdn/shop/files/goldenbostonfernbudsnblush.jpg?v=1710577642",
        tips: "Prefers cool, shady locations with moist soil.",
        tricks: "Works great in hanging baskets outdoors near pet zones.",
      },
      {
        title: "Cast Iron Plant",
        image:
          "https://houseplantresourcecenter.com/wp-content/uploads/2021/03/23771162095_1a01996b66_b-1.jpg",
        tips: "Extremely hardy, grows well in shade and poor soil.",
        tricks: "Low maintenance and totally pet-safe for garden beds.",
      },
    ];

    return (
      <>
        <div className="w-full h-full px-25 py-5 pt-20 gap-15 bg-[#FAF9F6] flex flex-wrap">
          {plantDetails.map((item, index) => {
            return <PlantDetails val={item} key={index} />;
          })}
        </div>
      </>
    );
  }

export default PetFriendly