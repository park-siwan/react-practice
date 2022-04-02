import axios from 'axios';
import React from 'react';
import useSWR from 'swr';

const fetcher = (...args) => axios.get(...args).then((res) => res.data);
function useUser(id) {
  const refresh = {
    refreshInterval: 1000,
  };
  const { data, error } = useSWR(`/api/user/${id}`, fetcher, refresh);
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
export default function Page() {
  return (
    <>
      <Profile id={124} />
      <Avatar id={124} />
    </>
  );
}
function Profile({ id }) {
  const { user, isLoading, isError } = useUser(id);
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <div>hellow {user.name}</div>
      <Avatar id={123} />
    </>
  );
}

function Avatar({ id }) {
  const { user, isLoading, isError } = useUser(id);
  if (isError) return <div>failed to load(Avatar)</div>;
  if (isLoading) return <div>loading...(Avatar)</div>;
  return <div>hellow {user.name}(Avatar)</div>;
}
