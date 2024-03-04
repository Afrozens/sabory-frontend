import React from "react";
import Image from "next/image";
import { MdOutlineDiscount } from "react-icons/md";

import { FoodPrimary } from "@/models/food";

interface Props {
  data: FoodPrimary;
}

const CardPrimaryFood = ({ data }: Props) => {
  return (
    <div className="flex w-64 h-64 flex-col justify-center items-center shadow-sm">
      <div className="h-48 w-full relative">
        <div className="p-1 absolute top-4 right-4 rounded-3xl border-white border flex  items-center justify-center bg-white">
          <MdOutlineDiscount className="text-lg text-red-500" />
          <span className="text-red-500 font-bold">{data.offer}%</span>
        </div>
        <Image
          className="w-full bg-cover object-cover md:object-fill h-full rounded-t-3xl"
          src={data.imageUrl}
          alt={`image of ${data.name}`}
          width={100}
          height={100}
        />
      </div>
      <div className="w-full rounded-b-3xl bg-white relative h-14 flex justify-between items-center p-2">
        <div className="w-full flex flex-col justify-start py-2">
          <span className="-mb-3 self-start capitalize text-lg text-gray-900 font-medium">
            {data.name}
          </span>
          <div className="flex w-fit justify-center items-center">
            <div className="rating w-fit">
              <input name="rating" id="star5" type="radio" />
              <label htmlFor="star5" style={{ color: "#6ec6ad" }} />
            </div>
            <span className="font-medium text-gray-500 text-xs">
              {data.point}
            </span>
          </div>
        </div>
        <div className="w-fit flex flex-col justify-end items-center">
          <span className="line-through text-gray-500 text-xs">
            ${data.price}
          </span>
          <span className="font-semibold text-lg  text-gray-900">
            ${(data.price - (data.price * data.offer) / 100).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardPrimaryFood;
