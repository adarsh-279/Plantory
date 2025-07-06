import React from 'react'
import PlantDetails from "../PlantDetails";

const LowMaintenance = () => {
  const plantDetails = [
    {
      title: "Snake Plant",
      image:
        "https://images.squarespace-cdn.com/content/v1/54fbb611e4b0d7c1e151d22a/1610074066643-OP8HDJUWUH8T5MHN879K/Snake+Plant.jpg?format=1000w",
      tips: "Survives in direct sun and neglect. Water once soil is fully dry.",
      tricks: "Thrives even in poor soil and outdoor containers.",
    },
    {
      title: "Aloe Vera",
      image:
        "https://media.admiddleeast.com/photos/67d7d2fbef321f120ced4f9c/master/w_1600%2Cc_limit/GettyImages-1475314230.jpg",
      tips: "Needs full sun and minimal watering. Very drought-tolerant.",
      tricks: "Perfect for rock gardens and dry corners.",
    },
    {
      title: "Agave",
      image:
        "https://mybageecha.com/cdn/shop/products/Agave_desmettiana-Smooth_Agave.jpg?v=1751110230",
      tips: "Requires full sun and sandy soil. Water occasionally.",
      tricks: "Extremely heat- and drought-tolerant — perfect for xeriscaping.",
    },
    {
      title: "Bougainvillea",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-aRvUHvpGz2ZeA8y0J3744YInuexRRdDRQ&s",
      tips: "Needs dry soil and lots of sunlight to thrive.",
      tricks: "Less water equals more blooms and vibrant color.",
    },
    {
      title: "Jade Plant",
      image: "https://m.media-amazon.com/images/I/51n0fa4c-iL.jpg",
      tips: "Grows best in sun and needs water only when the soil dries.",
      tricks: "Can be grown in small pots with almost no care.",
    },
    {
      title: "Zz Plant",
      image:
        "https://m.media-amazon.com/images/I/61ZRN9vL1FL._UF1000,1000_QL80_.jpg",
      tips: "Tolerates low light and irregular watering schedules.",
      tricks: "Perfect for balconies or shaded patios with little upkeep.",
    },
    {
      title: "Sedum (Stonecrop)",
      image:
        "https://www.southernliving.com/thmb/UqlTaVP_Z-jTVuN4vA3_yHsGb6g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sedum-2000-f1ed6cadc20c44c98ddf11e654a4fc7d.jpg",
      tips: "Loves full sun and needs very little water.",
      tricks: "Ideal for rock gardens and borders; spreads naturally.",
    },
    {
      title: "Yucca Plant",
      image: "https://m.media-amazon.com/images/I/61fawTHTuIL._AC_.jpg",
      tips: "Thrives in full sun and sandy soil with rare watering.",
      tricks: "Almost unkillable — just avoid overwatering.",
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

export default LowMaintenance