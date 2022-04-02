# SWR

- Stale-While-Revalidate(HTTP 캐시 전략중 하나)
- 의도적으로 cache된 data를 return하고
  fetch(revalidate) 가져오기(갱신) 한 후 data를 update한다.

- key가 같다면 요청이 자동으로 하나되어 합쳐진다.
  중복을 제거하고
- 캐시로써 공유됨
- 여러 컴포넌트에서 써도 알아서 합리적으로 처리한다.
- 사용자 포커스나 네트워크 재연결 시 자동 갱신된다.

## Revalidate(자동갱신) 조건

(https://swr.vercel.app/ko/docs/revalidation)

- refreshInterval
- revalidateIfStale
- revalidateOnFocus
- revalidateOnReconnect
- useSWRImmutable (위 조건을 끄는 역할)

## useSWR options

- (https://swr.vercel.app/ko/docs/options)

## SWRConfig

- useSWR에 세팅할 options들을 전역으로 설정할 수 있다.
- 예) 로컬스토리지에 cache저장 하는 persistant cache를 설정가능
- (https://swr.vercel.app/ko/docs/global-configuration)

## Cache

- (https://swr.vercel.app/ko/docs/advanced/cache)
- Cache Provider
- mutate
- cache
- Persistent Cache
