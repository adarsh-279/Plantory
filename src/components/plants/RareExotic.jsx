import React from 'react'
import PlantDetails from "../PlantDetails";

const RareExotic = () => {
    const plantDetails = [
      {
        title: "Bird Of Paradise",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5JlF-M3ZeEhZtb_XFFX_zJMwMotZ2iRt2g&s",
        tips: "Needs full sunlight and well-draining soil to flower.",
        tricks: "Water regularly during growing season and reduce in winter.",
      },
      {
        title: "Staghorn Fern",
        image:
          "https://images.immediate.co.uk/production/volatile/sites/10/2023/07/2048x1365-Platycerium-GettyImages-1321318531-1baec8d.jpg?quality=90&fit=700,466",
        tips: "Grows best mounted on wood in partial shade with high humidity.",
        tricks: "Mist regularly instead of overwatering soil.",
      },
      {
        title: "Desert Rose (Adenium)",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuqEauwjzn3OFQPKPipWqT-JCbUz81vtF2pQ&s",
        tips: "Thrives in full sun and sandy soil; drought-tolerant.",
        tricks: "Water sparingly; stem stores moisture like a succulent.",
      },
      {
        title: "Buddha's Hand",
        image:
          "https://www.moonvalleynurseries.com/_next/image?url=https%3A%2F%2Fcdn.mvncorp.dev%2Fmedia%2Fproducts%2Fimages%2FBuddha%27s%20Hand%20Lemon&w=3840&q=50",
        tips: "Requires full sunlight and rich, loamy soil.",
        tricks: "Fruits are fragrant and often used in perfumes and zests.",
      },
      {
        title: "Bleeding Heart Vine",
        image:
          "https://www.santhionlineplants.com/wp-content/uploads/2022/01/bleeding-heart-red-vine.jpeg",
        tips: "Prefers partial shade and moist, fertile soil.",
        tricks: "Prune after blooming to maintain shape and encourage flowers.",
      },
      {
        title: "Himalayan Blue Poppy",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR51_o3RF-HHEZQ9N9vNKs1mmH1AF3dB8qf3w&s",
        tips: "Needs cool temperatures and partial shade with rich soil.",
        tricks: "Difficult to grow; thrives best in high-altitude gardens.",
      },
      {
        title: "Sensitive Plant (Mimosa Pudica)",
        image: "https://m.media-amazon.com/images/I/61NJFSJ+e8L.jpg",
        tips: "Likes full sun and moist, well-drained soil.",
        tricks: "Leaves fold when touched — a fascinating sensory feature.",
      },
      {
        title: "Black Bat Flower",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQuTx4tI3TU98HgaoXCbE_4W0AV99ZvSrNsQ&s",
        tips: "Grows in humid, shaded environments with rich soil.",
        tricks: "Rare tropical plant known for its dark, bat-like flowers.",
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

export default RareExotic