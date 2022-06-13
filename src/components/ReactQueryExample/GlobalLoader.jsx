import React from 'react';
import { useIsFetching } from 'react-query';

export default function GlobalLoader() {
  const isFetching = useIsFetching();
  return isFetching ? (
    <div style={{ color: 'red' }}>Queries are fetching in the background..</div>
  ) : null;
}
