import React from "react";
import { FoodPrimary } from "@/models/food";
import Image from "next/image";

interface Props {
  data: FoodPrimary;
}

const CardPrimaryFood = ({ data }: Props) => {
  return (
    <div className="h-48 w-64 md:56 relative">
      <div className="p-1 absolute top-4 right-4 rounded-3xl border-white border flex gap-2 items-center justify-center bg-white">
        <span className="text-red-500 font-bold">{data.offer}%</span>
      </div>
      <Image
        className="w-full bg-cover object-cover md:object-fill h-full rounded-3xl"
        src={data.imageUrl}
        alt={`image of ${data.name}`}
        width={100}
        height={100}
      />
      <div className="absolute bottom-4 left-4 flex flex-col">
        <span className="capitalize text-lg text-white font-medium">
          {data.name}
        </span>
        <span className="font-semibold text-lg text-white">
          ${data.price - (data.price * data.offer) / 100}
        </span>
      </div>
    </div>
  );
};

export default CardPrimaryFood;
