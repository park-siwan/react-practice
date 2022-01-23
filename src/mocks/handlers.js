import { rest } from "msw";

export const handlers = [
  rest.get("/login", async (req, res, ctx) => {
    return res(
      ctx.json({
        id: "123",
        firstname: "park",
        lastName: "siwan",
      })
    );
  }),
];
