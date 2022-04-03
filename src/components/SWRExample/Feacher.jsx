import axios from 'axios';
import React from 'react';
import useSWR, { SWRConfig } from 'swr';
const fetcher = (...args) => axios.get(...args).then((res) => res);
export default function Feacher() {
  return (
    <SWRConfig value={{ fetcher }}>
      <Page />
    </SWRConfig>
  );
}
const Page = () => {
  const { data, error } = useSWR('api/user/123', {
    //override
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      //에러처리
      // console.dir(JSON.stringify(error));
      if (error.response.status === 400) {
        alert(400);
        return;
      }
      //재시도는 3회까지
      if (retryCount > 3) {
        return;
      }
      //override 했다면 revalidate를 언제할지 정해야함
      setTimeout(() => revalidate({ retryCount }), 100);
    },
  });

  if (error) {
    return <div>error...</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }
  return <div>{data.name}</div>;
};

//결론 : mocks/handlers.js 에서 일부러  return res(ctx.status(400));로 오류를 반환하게 설정했다. 새로고침후 네트워크를 보면 빠르게 revalidate를 3번 시도하고 끝나는걸 볼 수 있다.
