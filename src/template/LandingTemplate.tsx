"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import { IoIosReturnLeft, IoIosReturnRight } from "react-icons/io";
// utils
import { responsive } from "@/utils/responsive";
// stub (?)
import { foodDataPrimary } from "@/stub/lobby/FoodPrimary";
// components
import CardPrimaryFood from "@/components/general/CardPrimaryFood";
import ButtonCarousel from "@/components/general/ButtonCarousel";

const LandingTemplate = () => {
  return (
    <Carousel
      autoPlay
      arrows
      draggable={false}
      responsive={responsive}
      autoPlaySpeed={2500}
      customRightArrow={
        <ButtonCarousel direction="right">
          <IoIosReturnRight className="text-2xl text-secondary text-bold" />
        </ButtonCarousel>
      }
      customLeftArrow={
        <ButtonCarousel direction="left">
          <IoIosReturnLeft className="text-2xl text-secondary text-bold" />
        </ButtonCarousel>
      }
      infinite
      transitionDuration={500}
    >
      {foodDataPrimary &&
        foodDataPrimary.map((food) => (
          <CardPrimaryFood key={food.id} data={food} />
        ))}
    </Carousel>
  );
};

export default LandingTemplate;
