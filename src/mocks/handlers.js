import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:3000/api/user/:userId', async (req, res, ctx) => {
    const { userId } = req.params;
    return res(
      ctx.json({
        name: `siwan (${userId})`,
      })
    );
    //에러가 나면 default로 5초에 한번씩 재시도함
    // return res(ctx.status(400));
    // return res(ctx.json({ name: id === '1' ? 'The one' : 'The others' }));
  }),
  rest.get(
    'https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json?id=3168',
    async (req, res, ctx) => {
      const id = req.url.searchParams.get('id');

      const originalResponse = await ctx.fetch(req);
      const originalResponseData = await originalResponse.json();

      return res(
        // ctx.status(403),
        // ctx.json({
        //   errorMessage: `Data not Found`,
        // })
        ctx.json({
          data: {
            people: [
              ...originalResponseData.data.people,
              {
                name: id,
                age: 28,
                id: id,
              },
              {
                name: 'timmy',
                age: 13,
              },
            ],
          },
        })
      );
    }
  ),
];
