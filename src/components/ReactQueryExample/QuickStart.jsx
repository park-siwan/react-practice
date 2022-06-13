import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import GlobalLoader from './GlobalLoader';
import { getTodos, postTodo } from './my-api';

export default function QuickStart() {
  //provider에서 주는 queryClient 가져오기
  const queryClient = useQueryClient();

  const query = useQuery('todos', getTodos);

  //useMutation 활용하면 post 하자마자 get을 해줘서 실시간 반영된다.
  //invalidateQueries 을 주석처리하면 포커싱할때만 SWR처럼 refresh 해준다.
  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  if (query.isLoading) {
    return 'Loading...';
  }

  if (query.error) {
    return 'Error...';
  }

  return (
    <div>
      {/* 포커스 전환시 refresh가 생성되었다가 사라지는걸 알 수 있다. */}
      <GlobalLoader />
      <ul>
        {query.data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
        <button
          onClick={() => {
            mutation.mutate({ id: Date.now(), title: 'Learn React-Query' });
          }}
        >
          Add Todo
        </button>
      </ul>
    </div>
  );
}
