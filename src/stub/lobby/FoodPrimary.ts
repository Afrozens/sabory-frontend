import { FoodPrimary } from "@/models/food";
import { v4 as uuidv4 } from "uuid";

export const foodDataPrimary: FoodPrimary[] = [
  {
    id: uuidv4(),
    name: "Enredado de queso",
    imageUrl: "/stub/carousel-lobby/food1.jpg",
    price: 1.2,
    offer: 35,
  },
  {
    id: uuidv4(),
    name: "Pan integral",
    imageUrl: "/stub/carousel-lobby/food2.jpg",
    price: 2.5,
    offer: 45,
  },
  {
    id: uuidv4(),
    name: "Catalina",
    imageUrl: "/stub/carousel-lobby/food3.jpg",
    price: 0.75,
    offer: 15,
  },
  {
    id: uuidv4(),
    name: "Queso duro",
    imageUrl: "/stub/carousel-lobby/food4.jpg",
    price: 6,
    offer: 12,
  },
  {
    id: uuidv4(),
    name: "Panettone",
    imageUrl: "/stub/carousel-lobby/food5.jpg",
    price: 3,
    offer: 21,
  },
];
