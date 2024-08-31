import React from "react";
import { Hero } from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import Offers from "../components/Offers/Offers";
import NevCollections from "../components/NewCollections/NevCollections";

export const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NevCollections />
    </div>
  );
};
