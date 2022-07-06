import { rest } from "msw";
import url from "../api/baseUrl";

export const handlers = [
  rest.get(`${url}/scoops`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Vanilla",
          image: "images/vanilla.png",
        },
        {
          name: "Chocolate",
          image: "images/chocolate.png",
        },
      ])
    );
  }),
  rest.get(`${url}/toppings`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Cherries",
          imagePath: "/images/cherries.png",
        },
        {
          name: "M&Ms",
          imagePath: "/images/m-and-ms.png",
        },
        {
          name: "Hot fudge",
          imagePath: "/images/hot-fudge.png",
        },
      ])
    );
  }),
];
