import React from 'react'
import PlantDetails from "../PlantDetails";

const Medicinal = () => {
    const plantDetails = [
      {
        title: "Tulsi (Holy Basil)",
        image:
          "https://m.media-amazon.com/images/I/61tXHtetSxL._UF1000,1000_QL80_.jpg",
        tips: "Needs full sun and regular watering. Prefers warm climates.",
        tricks:
          "Pluck leaves regularly to promote branching and leaf production.",
      },
      {
        title: "Aloe Vera",
        image:
          "https://media.admiddleeast.com/photos/67d7d2fbef321f120ced4f9c/master/w_1600%2Cc_limit/GettyImages-1475314230.jpg",
        tips: "Thrives in sunny spots with sandy, well-drained soil.",
        tricks: "Use leaf gel directly on burns, cuts, or skin irritation.",
      },
      {
        title: "Neem Tree",
        image:
          "https://wildroots.in/wp-content/uploads/2020/07/Untitled-design-36-1.jpg",
        tips: "Requires full sunlight and low-maintenance soil.",
        tricks:
          "Leaves can be used for skin treatments and as natural pesticide.",
      },
      {
        title: "Mint Plant",
        image:
          "https://i0.wp.com/thefreshlymade.com/wp-content/uploads/2020/10/TFMOD150S.jpg?fit=1080%2C1080&ssl=1",
        tips: "Grows best in partial sunlight and moist soil.",
        tricks: "Trim regularly to prevent it from becoming invasive.",
      },
      {
        title: "Lemongrass",
        image:
          "https://nurserykart.in/cdn/shop/files/lemongrass.jpg?v=1742164724&width=1445",
        tips: "Needs full sun and well-drained soil. Water moderately.",
        tricks: "Use the stalks in herbal tea to aid digestion and immunity.",
      },
      {
        title: "Curry Leaf Plant",
        image:
          "https://theaffordableorganicstore.com/cdn/shop/files/Curry-Leaves-Sapling-1.webp?v=1744629678",
        tips: "Prefers full sunlight and regular pruning for bushy growth.",
        tricks:
          "Leaves are rich in antioxidants and improve hair and skin health.",
      },
      {
        title: "Ashwagandha",
        image:
          "https://www.ahpa.org//Files/Herbs-in-History/43_Ashwagandha/ashwagandha_thumbnail.png",
        tips: "Needs dry soil and full sun. Drought-tolerant once mature.",
        tricks:
          "Roots are used in Ayurvedic medicine for stress relief and immunity.",
      },
      {
        title: "Brahmi",
        image: "https://gachwala.in/wp-content/uploads/2022/06/BRAHMI-1.webp",
        tips: "Requires moist soil and partial shade to grow well.",
        tricks:
          "Enhances memory and concentration when used regularly in herbal tea.",
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

export default Medicinal