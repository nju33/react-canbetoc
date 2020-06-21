# react-canbetoc

目次が作れる React コンポーネントです。

## Install

`react`と`react-dom`と一緒にインストールが必要です。

```jsx
yarn add react react-dom react-canbetoc
```

## Example

```jsx
import { Canbetoc } from 'react-canbetoc'

// ---

return (
  <Canbetoc
    id="unique-id"
    // 目次となる大雑把なセレクターを指定します
    // インデックスが若いほど大きい目次として扱われます
    selectors={['h2', 'h3', 'h4']}
  >
    <article>
      <header>...</header>

      <div>
        {/* 目次となる要素には`id`指定が必須です */}
        <h2 id="article-title-1">Article Title</h2>
        <p>...</p>

        <h3 id="sub-title-1">Sub Title</h3>
        <p>...</p>

        <h4 id="sub-sub-title-1">Sub Sub Title</h3>
        <p>...</p>

        <h3 id="sub-title-2">Sub Title</h3>
        <p>...</p>

        <h4 id="sub-sub-title-2">Sub Sub Title</h3>
        <p>...</p>

        {/*
       マークアップは必ずプロパティで指定したセレクターの順番にする必要があります
       以下の場合、`h3`が飛ばされている為`h4`は目次に現れません
       */}
        <h2 id="...">...</h2>
        <h4 id="...">...</h4>
      </div>

      <footer>...</footer>
    </article>
  </Canbetoc>
)

```