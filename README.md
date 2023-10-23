# 프로젝트 설치 및 실행 방법

```
$ git clone https://github.com/zeromountain/pokemon-guide.git
$ yarn install
$ yarn dev
```

# 폴더 구조

```
📦src
 ┣ 📂apis
 ┃ ┣ 📂instance
 ┃ ┃ ┗ 📜index.ts
 ┃ ┗ 📂pokemon
 ┃ ┃ ┣ 📜pokemon.type.ts
 ┃ ┃ ┣ 📜pokemonApi.query.ts
 ┃ ┃ ┗ 📜pokemonApi.ts
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📂atoms
 ┃ ┃ ┗ 📜button.tsx
 ┃ ┣ 📂molecules
 ┃ ┃ ┣ 📂card
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂modal
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.module.css
 ┃ ┃ ┗ 📂searchInput
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜style.module.css
 ┃ ┣ 📂organisms
 ┃ ┃ ┣ 📂a
 ┃ ┃ ┗ 📂header
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂pages
 ┃ ┃ ┣ 📜detail.tsx
 ┃ ┃ ┗ 📜main.tsx
 ┣ 📂constants
 ┃ ┗ 📜pokemon-type-map.ts
 ┣ 📂hooks
 ┃ ┣ 📜useInfiniteScroll.ts
 ┃ ┗ 📜useInput.ts
 ┣ 📂router
 ┃ ┗ 📜index.tsx
 ┣ 📂store
 ┃ ┣ 📂pokemonSlice
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂searchSlice
 ┃ ┃ ┗ 📜index.ts
 ┃ ┗ 📜index.ts
 ┣ 📂types
 ┃ ┣ 📂react-query
 ┃ ┃ ┣ 📜use-infinite-query-params.ts
 ┃ ┃ ┣ 📜use-query.ts
 ┃ ┃ ┗ 📜wrap-variables.ts
 ┃ ┣ 📂static
 ┃ ┃ ┣ 📜async-fn.ts
 ┃ ┃ ┣ 📜fn.ts
 ┃ ┃ ┗ 📜obj.ts
 ┃ ┗ 📂utils
 ┃ ┃ ┣ 📜async-fn-return.ts
 ┃ ┃ ┗ 📜parameter.ts
 ┣ 📂utils
 ┃ ┣ 📜parse-size-info.ts
 ┃ ┗ 📜recursion.ts
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜_layout.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

# 구현항목

## 리스트페이지

- 포켓몬 번호 검색 기능: 포켓몬 검색 API에 포켓몬 고유 id값을 파라미터로 전달해 검색 기능 구현
- 무한스크롤: `IntersectionObserver` API를 사용해 타켓을 지정한 지점에 가까워졌을 때, 다음 페이지 API를 호출하도록 구현

## 상세페이지

- 포켓몬 상세 정보 표시: 포켓몬 상세 정보 API를 사용해 포켓몬 정보 표시
- 포켓몬 진화 정보 표시: 포켓몬 진화 API를 사용해 `evolves_to` 키를 사용해 포켓몬 진화 정보 표시
- `(포켓몬 진화 단계가 2단계인 포켓몬부터 이전 포켓몬의 진화 정보를 불러오는 이슈가 있음)`

# 추가 구현 사항

- 포켓몬 한글 이름 출력
- typescript 사용
