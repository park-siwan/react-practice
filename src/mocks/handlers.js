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
  rest.get(
    "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json",
    async (req, res, ctx) => {
      return res(
        ctx.json({
          data: {
            people: [
              {
                name: "siwan",
                age: 28,
              },
              {
                name: "timmy",
                age: 13,
              },
              {
                name: "cindy",
                age: 15,
              },
              {
                name: "judy",
                age: 25,
              },
              {
                name: "marry",
                age: 64,
              },
              {
                name: "tommy",
                age: 109,
              },
            ],
          },
        })
      );
    }
  ),
];
