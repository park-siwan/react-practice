import React from 'react';
import { SWRConfig, useSWRConfig } from 'swr';
import { Avatar } from './Profile';

function localStorageProvider() {
  const map = new Map(JSON.parse(localStorage.getItem('app-cache') || '[]'));

  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem('app-cache', appCache);
  });
  return map;
}

export default function Cache() {
  return (
    // <SWRConfig value={{ refreshInterval: 1000 }}>
    //로컬스토리지 데이터도 지속되게(persistent) 할 수 있다.
    <SWRConfig
      value={{ refreshInterval: 1000, provider: localStorageProvider }}
    >
      {/* <SWRConfig> */}
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
