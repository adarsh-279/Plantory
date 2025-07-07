import React from "react";
import PlantDetails from "../PlantDetails";

const Indoor = () => {
  const plantDetails = [
    {
      title: "Snake Plant",
      image:
        "https://images.squarespace-cdn.com/content/v1/54fbb611e4b0d7c1e151d22a/1610074066643-OP8HDJUWUH8T5MHN879K/Snake+Plant.jpg?format=1000w",
      tips: "Water every 2–3 weeks and allow soil to dry completely between waterings.",
      tricks:
        "Thrives in low light and neglect, making it ideal for beginners.",
    },
    {
      title: "Peace Lily",
      image:
        "https://radhakrishnaagriculture.in/cdn/shop/files/peacelily.jpg?v=1709184309",
      tips: "Keep the soil moist but not soggy. Prefers low to medium light.",
      tricks:
        "It will droop to show it's thirsty — a natural watering reminder.",
    },
    {
      title: "Pothos",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/tropical-epipremnum-aureum-marble-queen-pothos-royalty-free-image-1733941893.pjpeg?crop=0.66667xw:1xh;center,top&resize=1120:*",
      tips: "Let the soil dry out between watering. Bright, indirect light is best.",
      tricks:
        "Grows quickly in water or soil and is great for hanging baskets.",
    },
    {
      title: "Spider Plant",
      image:
        "https://plantshub.in/wp-content/uploads/2023/06/5b59a7f8-e644-477e-99b4-8fd8f0e24ebb-jpg.webp",
      tips: "Water moderately; allow the soil to dry out a bit between waterings.",
      tricks: "Produces baby spiderettes which can be replanted easily.",
    },
    {
      title: "Aloe Vera",
      image:
        "https://media.admiddleeast.com/photos/67d7d2fbef321f120ced4f9c/master/w_1600%2Cc_limit/GettyImages-1475314230.jpg",
      tips: "Water deeply but infrequently. Needs bright, direct sunlight.",
      tricks: "Use the gel inside leaves for minor cuts or sunburns.",
    },
    {
      title: "Zz Plant",
      image:
        "https://m.media-amazon.com/images/I/61ZRN9vL1FL._UF1000,1000_QL80_.jpg",
      tips: "Needs infrequent watering and tolerates low light conditions.",
      tricks: "Hard to kill — perfect for offices or low-attention care.",
    },
    {
      title: "Jade Plant",
      image: "https://m.media-amazon.com/images/I/51n0fa4c-iL.jpg",
      tips: "Let the soil dry out completely between watering. Needs plenty of sunlight.",
      tricks: "Symbolizes prosperity — often used in Feng Shui.",
    },
    {
      title: "Bamboo Palm",
      image:
        "https://gardengram.in/cdn/shop/products/areca-palm-bamboo-palm-plant-500x500.jpg?v=1708662622",
      tips: "Prefers filtered light and moist (not soggy) soil.",
      tricks: "Helps remove indoor air toxins — a natural purifier.",
    },
  ];

  return (
    <>
      <div className="w-full h-full px-4 py-3 pt-10 gap-4 lg:px-25 lg:py-5 lg:pt-20 lg:gap-15 bg-[#FAF9F6] flex flex-wrap">
        {plantDetails.map((item, index) => {
          return <PlantDetails val={item} key={index} />;
        })}
      </div>
    </>
  );
};

export default Indoor;
