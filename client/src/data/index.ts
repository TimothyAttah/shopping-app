import { CartsItemType, CartSteps, ProductsType } from "@/types";


export const products:ProductsType = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod reprehenderit molestiae tenetur pariatur adipisci earum aliquid, debitis ab sit temporibus porro odio, at facilis nobis reiciendis dignissimos. Quidem, enim?",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod reprehenderit molestiae tenetur pariatur adipisci earum aliquid, debitis ab sit temporibus porro odio, at facilis nobis reiciendis dignissimos. Quidem, enim?",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
  },
  {
    id: 3,
    name: "Mike Air Essentials Pullover",
    shortDescription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod reprehenderit molestiae tenetur pariatur adipisci earum aliquid, debitis ab sit temporibus porro odio, at facilis nobis reiciendis dignissimos. Quidem, enim?",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
  },
  {
    id: 4,
    name: "Mike Dri Flor T-Shirt",
    shortDescription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod reprehenderit molestiae tenetur pariatur adipisci earum aliquid, debitis ab sit temporibus porro odio, at facilis nobis reiciendis dignissimos. Quidem, enim?",
    price: 29.9,
    sizes: ["s", "m", "l"],
    colors: ["white", "pink"],
    images: { white: "/products/4w.png", pink: "/products/4p.png" },
  },
  {
    id: 5,
    name: "Lidoor Airdoor Startface",
    shortDescription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod reprehenderit molestiae tenetur pariatur adipisci earum aliquid, debitis ab sit temporibus porro odio, at facilis nobis reiciendis dignissimos. Quidem, enim?",
    price: 49.9,
    sizes: ["s", "m", "l"],
    colors: ["red", "orange", "black"],
    images: {
      red: "/products/5r.png",
      orange: "/products/5o.png",
      black: "/products/5bl.png",
    },
  },
  {
    id: 6,
    name: "Levi's Classic Demin",
    shortDescription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod reprehenderit molestiae tenetur pariatur adipisci earum aliquid, debitis ab sit temporibus porro odio, at facilis nobis reiciendis dignissimos. Quidem, enim?",
    price: 59.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "white"],
    images: { green: "/products/6g.png", white: "/products/6w.png" },
  },
  {
    id: 7,
    name: "Nike Ultraboost Pulse",
    shortDescription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod reprehenderit molestiae tenetur pariatur adipisci earum aliquid, debitis ab sit temporibus porro odio, at facilis nobis reiciendis dignissimos. Quidem, enim?",
    price: 69.9,
    sizes: ["40", "42", "43"],
    colors: ["gray", "pink"],
    images: { gray: "/products/7g.png", pink: "/products/7p.png" },
  },
  {
    id: 8,
    name: "Levi's Classic Demin",
    shortDescription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod reprehenderit molestiae tenetur pariatur adipisci earum aliquid, debitis ab sit temporibus porro odio, at facilis nobis reiciendis dignissimos. Quidem, enim?",
    price: 59.9,
    sizes: ["s", "m", "l"],
    colors: ["blue", "green"],
    images: { blue: "/products/8b.png", green: "/products/8gr.png" },
  },
];

export const cartItems: CartsItemType = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod reprehenderit molestiae tenetur pariatur adipisci earum aliquid, debitis ab sit temporibus porro odio, at facilis nobis reiciendis dignissimos. Quidem, enim?",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    quantity: 1,
    selectedSize: "m",
    selectedColor: "gray",
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod reprehenderit molestiae tenetur pariatur adipisci earum aliquid, debitis ab sit temporibus porro odio, at facilis nobis reiciendis dignissimos. Quidem, enim?",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    quantity: 1,
    selectedSize: "l",
    selectedColor: "gray",
  },
  {
    id: 3,
    name: "Mike Air Essentials Pullover",
    shortDescription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod reprehenderit molestiae tenetur pariatur adipisci earum aliquid, debitis ab sit temporibus porro odio, at facilis nobis reiciendis dignissimos. Quidem, enim?",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    quantity: 1,
    selectedSize: "l",
    selectedColor: "black",
  },
];

export const steps: CartSteps[] = [
  {
    id: 1,
    title: "Shopping Cart",
  },
  {
    id: 2,
    title: "Shipping Address",
  },
  {
    id: 3,
    title: "Payment Method",
  },
];
