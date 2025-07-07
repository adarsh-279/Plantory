import React from 'react'
import PlantDetails from "../PlantDetails";

const Outdoor = () => {
    const plantDetails = [
      {
        title: "Areca Palm",
        image:
          "https://eureka-farms.com/cdn/shop/files/07_PALM_ARECA_01.jpg?v=1747160168&width=1500",
        tips: "Thrives in bright, indirect outdoor light with regular watering.",
        tricks:
          "Trim old fronds to keep the plant looking fresh and structured.",
      },
      {
        title: "Ficus Tree",
        image:
          "https://5.imimg.com/data5/SELLER/Default/2023/5/308551858/HA/GN/QG/158071964/whatsapp-image-2023-05-17-at-12-31-50-pm-500x500.jpeg",
        tips: "Place in partial sunlight and keep the soil moist but not soggy.",
        tricks: "Rotate occasionally for even growth and avoid sudden moves.",
      },
      {
        title: "Croton Plant",
        image:
          "https://shrigramorganics.com/wp-content/uploads/2020/06/51OukLdAS5L.jpg",
        tips: "Needs bright light to maintain colorful leaves. Water when topsoil dries.",
        tricks:
          "Mist leaves regularly to maintain humidity and avoid leaf drop.",
      },
      {
        title: "Dracaena Marginata",
        image:
          "https://m.media-amazon.com/images/I/51QcVKoVpcL._UF1000,1000_QL80_.jpg",
        tips: "Prefers filtered outdoor light and minimal watering.",
        tricks: "Wipe leaves to keep them glossy and remove dust.",
      },
      {
        title: "Elephant Ear Plant",
        image:
          "https://www.southernliving.com/thmb/WxBL7duXeWYTVVn6qa74pIJGtFw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/illustris_elephants_ear-3c5efb2af5de468ca098f984863238df.jpg",
        tips: "Plant in partial shade with rich, moist soil.",
        tricks: "Add mulch to retain moisture and enhance dramatic foliage.",
      },
      {
        title: "Yucca Plant",
        image: "https://m.media-amazon.com/images/I/61fawTHTuIL._AC_.jpg",
        tips: "Enjoys full sun and needs minimal water once established.",
        tricks: "Use gravel or sandy soil to prevent root rot.",
      },
      {
        title: "Bamboo Plant",
        image:
          "https://m.media-amazon.com/images/I/81uDnWyTiML._UF1000,1000_QL80_.jpg",
        tips: "Grows well outdoors in indirect light and moist, well-drained soil.",
        tricks: "Install barriers to prevent spreading if planting in-ground.",
      },
      {
        title: "Rubber Plant",
        image:
          "https://abeautifulmess.com/wp-content/uploads/2023/06/rubbertree-1.jpg",
        tips: "Best placed outdoors under filtered sunlight with moderate watering.",
        tricks:
          "Polish leaves gently to maintain their shine and keep dust away.",
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
}

export default Outdoor