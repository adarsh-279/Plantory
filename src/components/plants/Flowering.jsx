import React from 'react'
import PlantDetails from "../PlantDetails";

const Flowering = () => {
    const plantDetails = [
      {
        title: "Rose",
        image:
          "https://www.jiomart.com/images/product/original/rvibirnytu/cloud-farm-real-live-dark-red-rose-live-plant-hybrid-for-balcony-terrace-outdoor-gardening-cf_2064-product-images-orvibirnytu-p603649580-0-202308050834.jpg?im=Resize=(420,420)",
        tips: "Plant in full sunlight with well-drained, fertile soil.",
        tricks: "Deadhead regularly to promote continuous blooming.",
      },
      {
        title: "Hibiscus",
        image:
          "https://shrigramorganics.com/wp-content/uploads/2020/06/hibiscus_rosasinensis.jpg",
        tips: "Needs warm weather, full sunlight, and moist soil.",
        tricks: "Prune after blooming to maintain shape and flower size.",
      },
      {
        title: "Bougainvillea",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-aRvUHvpGz2ZeA8y0J3744YInuexRRdDRQ&s",
        tips: "Thrives in dry soil and full sunlight.",
        tricks: "Less water = more blooms; prune to control shape and size.",
      },
      {
        title: "Marigold",
        image:
          "https://nurserylive.com/cdn/shop/products/nurserylive-g-african-marigold-yellow-plant-398336.jpg?v=1679749016",
        tips: "Requires full sunlight and well-drained soil.",
        tricks: "Pinch off faded blooms to extend the flowering period.",
      },
      {
        title: "Periwinkle",
        image:
          "https://media.greg.app/cGxhbnQtZGItcGhvdG9zL3ZpbmNhLmpwZw==?format=pjpeg&optimize=high&auto=webp&precrop=1000:1000,smart&fit=crop&width=1000&height=1000",
        tips: "Grows well in partial to full sunlight and well-drained soil.",
        tricks: "Avoid overwatering; it’s drought-tolerant once established.",
      },
      {
        title: "Petunia",
        image:
          "https://static.wixstatic.com/media/f90246_f71fd46a692d46149dcb330c280aada4~mv2.jpg/v1/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f90246_f71fd46a692d46149dcb330c280aada4~mv2.jpg",
        tips: "Needs at least 5–6 hours of sunlight daily.",
        tricks: "Regular feeding and deadheading boosts continuous blooms.",
      },
      {
        title: "Zinnia",
        image: "https://m.media-amazon.com/images/I/612xwjhhyNL.jpg",
        tips: "Loves direct sunlight and blooms in warm seasons.",
        tricks: "Cut mature flowers to encourage fresh growth and more blooms.",
      },
      {
        title: "Chrysanthemum",
        image:
          "https://thursd.com/storage/media/42336/Pot-Chrysanthemum-Pink-Da-Vinci-on-Thursd-.jpg",
        tips: "Grows best in full sun and rich, moist soil.",
        tricks: "Pinch stems early in growth season to make bushier plants.",
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

export default Flowering