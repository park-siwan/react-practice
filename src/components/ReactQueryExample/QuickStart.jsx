import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getTodos, postTodo } from './my-api';

export default function QuickStart() {
  //provider에서 주는 queryClient 가져오기
  const queryClinet = useQueryClient();

  const query = useQuery('todos', getTodos);

  //useMutation 활용하면 post 하자마자 get을 해줘서 실시간 반영된다.
  //invalidateQueries 을 주석처리하면 포커싱할때만 SWR처럼 refresh 해준다.
  const mutaion = useMutation(postTodo, {
    onSuccess: () => {
      queryClinet.invalidateQueries('todos');
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
      <ul>
        {query.data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
        <button
          onClick={() => {
            mutaion.mutate({ id: Date.now(), title: 'Learn React-Query' });
          }}
        >
          Add Todo
        </button>
      </ul>
    </div>
  );
}
