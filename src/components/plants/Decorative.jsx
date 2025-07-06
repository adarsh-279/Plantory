import React from 'react'
import PlantDetails from "../PlantDetails";

const Decorative = () => {
    const plantDetails = [
      {
        title: "Croton",
        image:
          "https://shrigramorganics.com/wp-content/uploads/2020/06/51OukLdAS5L.jpg",
        tips: "Needs bright, indirect sunlight and moist, well-drained soil.",
        tricks: "Rotate often to ensure even coloring and growth.",
      },
      {
        title: "Areca Palm",
        image:
          "https://eureka-farms.com/cdn/shop/files/07_PALM_ARECA_01.jpg?v=1747160168&width=1500",
        tips: "Thrives in indirect outdoor light and regular watering.",
        tricks: "Trim brown fronds to maintain its lush appearance.",
      },
      {
        title: "Dracaena Marginata",
        image:
          "https://m.media-amazon.com/images/I/51QcVKoVpcL._UF1000,1000_QL80_.jpg",
        tips: "Prefers partial shade and needs only occasional watering.",
        tricks: "Wipe the leaves to keep them shiny and dust-free.",
      },
      {
        title: "Yucca Plant",
        image: "https://m.media-amazon.com/images/I/61fawTHTuIL._AC_.jpg",
        tips: "Loves full sun and needs minimal water.",
        tricks: "Use gravelly soil to prevent root rot.",
      },
      {
        title: "Bamboo Plant",
        image:
          "https://m.media-amazon.com/images/I/81uDnWyTiML._UF1000,1000_QL80_.jpg",
        tips: "Prefers indirect sunlight and moist soil.",
        tricks: "Place in containers to control its spread.",
      },
      {
        title: "Snake Plant",
        image:
          "https://images.squarespace-cdn.com/content/v1/54fbb611e4b0d7c1e151d22a/1610074066643-OP8HDJUWUH8T5MHN879K/Snake+Plant.jpg?format=1000w",
        tips: "Tolerates direct sun and drought well.",
        tricks: "Minimal watering keeps the plant healthy and upright.",
      },
      {
        title: "Ficus Benjamina",
        image:
          "https://greenparadiselive.com/cdn/shop/files/black_ficus_3_1200x1200.png?v=1718339755",
        tips: "Needs filtered light and moist soil.",
        tricks: "Avoid moving it frequently; it sheds leaves due to stress.",
      },
      {
        title: "Cordyline",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKv11RwHd14Q0N0sv8jkRnVLsKAb1RpdtVbdvrsmup-k63gD0f3Ngc1bXU5a8PuI2Z60&usqp=CAU",
        tips: "Grows well in warm, humid conditions with indirect sunlight.",
        tricks: "Color deepens with brighter light and consistent feeding.",
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

export default Decorative