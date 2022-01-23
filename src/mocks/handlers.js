import { rest } from "msw";

export const handlers = [rest.get("/login", async (req, res, ctx) => {})];
