import React from "react";
import Cards from "./Cards";

const CardComponent = () => {
  const plantCategory = [
    {
      title: "Indoor",
      image:
        "https://images.unsplash.com/photo-1667710423991-9b8e2261bf16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxvdXRkb29yJTIwcGxhbnRzJTIwaW4lMjBwb3QlMjBpbWFnZSUyMDRrfGVufDB8MnwwfHx8MA%3D%3D",
    },
    {
      title: "Outdoor",
      image:
        "https://images.unsplash.com/photo-1592659819139-7a2f3ca715bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHxvdXRkb29yJTIwcGxhbnRzJTIwaW4lMjBwb3QlMjBpbWFnZSUyMDRrfGVufDB8MnwwfHx8MA%3D%3D",
    },
    {
      title: "Medicinal",
      image:
        "https://media.admiddleeast.com/photos/67d7d2fbef321f120ced4f9c/master/w_1600%2Cc_limit/GettyImages-1475314230.jpg",
    },
    {
      title: "Flowering",
      image:
        "https://images.unsplash.com/photo-1747635946157-018d926642f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGZsb3dlciUyMHBvdHxlbnwwfDJ8MHx8fDA%3D",
    },
    {
      title: "Low Maintenance",
      image:
        "https://s.yimg.com/ny/api/res/1.2/O1ijMV9SQvrvsNVDHpw7gQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTYxNg--/https://media.zenfs.com/en/hearst_prevention_66/efad17bcd6b947358ff8e4f81b992c81",
    },
    {
      title: "Pet-Friendly",
      image:
        "https://bloomboxclub.com/cdn/shop/files/Money_Tree_Pachira_Aquatica.png?v=1729012012",
    },
    {
      title: "Decorative",
      image:
        "https://images.unsplash.com/photo-1667380712455-a82999646b9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGRlY29yYXRpdmUlMjBwbGFudHN8ZW58MHwyfDB8fHww",
    },
    {
      title: "Rare & Exotic",
      image:
        "https://i.pinimg.com/736x/10/47/3b/10473beafef910714bc86c7f62711f23.jpg",
    },
  ];

  return (
    <>
      <h1 className="w-full text-9xl px-4 py-3 pt-20 flex items-center justify-center font-[Tothepoint] bg-[#FAF9F6]">
        Plant Categories
      </h1>
      <div className="w-full h-full px-25 py-5 gap-15 bg-[#FAF9F6] flex flex-wrap">
              {plantCategory.map((item, index) => {
                return <Cards val={item} key={index} />;
        })}
      </div>
    </>
  );
};

export default CardComponent;
