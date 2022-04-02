import React from 'react';
import { SWRConfig, useSWRConfig } from 'swr';
import { Avatar } from './Profile';

export default function Cache() {
  return (
    <SWRConfig>
      <Page />
    </SWRConfig>
  );
}

const Page = () => {
  //SWRConfig로 감싸면 cache에 접근할 수 있다.
  //mutate는 받은 key로 fetcher를 다시실행한다. (새로운 값으로 업데이트)
  const { cache, mutate } = useSWRConfig();
  return (
    <div>
      <Avatar id={1212} />
      <button
        onClick={() => {
          mutate('/api/user/1212');
          // console.log(`check:${JSON.stringify(cache.get('/api/user/1212'))}`);
        }}
      >
        check
      </button>
    </div>
  );
};
