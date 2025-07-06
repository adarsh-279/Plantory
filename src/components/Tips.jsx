import React from 'react'
import Tip from './Tip'
import { motion } from "framer-motion";

const Tips = () => {
    const plantTip = [
      {
        title: "Humidity",
        tip: "Most indoor plants thrive at 40-60% humidity. Use a humidity tray or mist your plants regularly during dry seasons.",
        icon: "🌫",
      },
      {
        title: "Watering",
        tip: "Check the top inch of soil before watering. Overwatering is a common killer — let soil dry slightly between waterings.",
        icon: "💧",
      },
      {
        title: "Temperature",
        tip: "Keep most houseplants in the 18–24°C (65–75°F) range. Avoid placing them near heaters, AC vents, or drafty windows.",
        icon: "🌡",
      },
      {
        title: "Soil",
        tip: "Choose well-draining potting soil based on plant type. Succulents need sandy soil; herbs prefer nutrient-rich mixes.",
        icon: "🪴",
      },
      {
        title: "Lighting",
        tip: "Place sun-loving plants near bright windows, and use grow lights for low-light rooms. Rotate pots weekly for even growth.",
        icon: "☀",
      },
      {
        title: "Fertilizing",
        tip: "Use a balanced fertilizer every 2–4 weeks during the growing season. Avoid overfeeding in winter months.",
        icon: "🌱",
      },
      {
        title: "Maintenance",
        tip: "Trim dead leaves and stems to encourage new growth and prevent disease. Use clean, sharp scissors.",
        icon: "✂",
      },
      {
        title: "Pest Control",
        tip: "Check under leaves for spider mites, aphids, or fungus gnats. Use neem oil or soap sprays for natural treatment.",
        icon: "🐛",
      },
    ];

    return (
      <>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          id="tips"
          className="w-full text-9xl px-4 py-3 pt-30 flex items-center justify-center font-[Tothepoint] bg-[#FAF9F6]"
        >
          Steps to start taking care of your plants
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full px-25 py-5 gap-15 bg-[#FAF9F6] flex flex-wrap"
        >
          {plantTip.map((item, index) => {
            return <Tip val={item} key={index} />;
          })}
        </motion.div>
      </>
    );
    };

export default Tips