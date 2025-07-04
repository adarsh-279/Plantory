import React from 'react'
import IndoorPlants from './IndoorPlants';

const Card = () => {
const indoorPlant = [
  {
    title: "snake plant",
    image: "https://images.unsplash.com/photo-1602345702506-750d5fda0f35",
  },
  {
    title: "spider plant",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
  },
  {
    title: "peace lily",
    image: "https://images.unsplash.com/photo-1592202189223-356d4d73b3ec",
  },
  {
    title: "zz plant",
    image: "https://images.unsplash.com/photo-1621609765841-3e7e6742c030",
  },
  {
    title: "pothos",
    image: "https://images.unsplash.com/photo-1615484477667-0c5d97e4f30d",
  },
  {
    title: "rubber plant",
    image: "https://images.unsplash.com/photo-1616401782537-8f28b6ae0a10",
  },
  {
    title: "aloe vera",
    image: "https://images.unsplash.com/photo-1612197590266-6f028cb4c2b1",
  },
  {
    title: "calathea",
    image: "https://images.unsplash.com/photo-1631046869854-90ec14eb289d",
  },
  {
    title: "jade plant",
    image: "https://images.unsplash.com/photo-1588702547914-ec9286f8df04",
  },
  {
    title: "boston fern",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
  },
  {
    title: "jade plant",
    image:
      "https://www.elledecor.com/life-culture/fun-at-home/a62979592/grow-jade-plants-indoors/",
  },
  {
    title: "aloe vera",
    image:
      "https://www.realsimple.com/home-organizing/gardening/indoor/aloe-vera-plant-care",
  },
  {
    title: "snake plant",
    image:
      "https://www.realsimple.com/home-organizing/gardening/indoor/snake-plant-care",
  },
  {
    title: "panda plant",
    image: "https://gardenerspath.com/plants/houseplants/grow-panda-plant/",
  },
  {
    title: "string of pearls",
    image:
      "https://www.housebeautiful.com/lifestyle/gardening/a32666902/string-of-pearls-plant-care/",
  },
  {
    title: "hens-and-chicks",
    image: "https://www.gardendesign.com/succulents/hens-and-chicks.html",
  },
  {
    title: "ponytail palm",
    image:
      "https://www.bhg.com/gardening/plant-dictionary/houseplant/ponytail-palm/",
  },
  {
    title: "african milk tree",
    image: "https://planetdesert.com/products/euphorbia-trigona",
  },
  {
    title: "zebra haworthia",
    image: "https://www.thespruce.com/grow-haworthia-indoors-1902743",
  },
  {
    title: "burro’s tail",
    image:
      "https://www.gardeningknowhow.com/ornamental/cacti-succulents/sedum/burros-tail-care.htm",
  },
];

  return (
    <>
      <h1
        id="category"
        className="w-full text-9xl px-4 py-3 pt-20 flex items-center justify-center font-[Tothepoint] bg-[#FAF9F6]"
      >
        Plants
      </h1>
      <div className="w-full h-full px-25 py-5 gap-15 bg-[#FAF9F6] flex flex-wrap">
        {indoorPlant.map((item, index) => {
          return <IndoorPlants val={item} key={index} />;
        })}
      </div>
    </>
  );
}

export default Card