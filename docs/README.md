[@nju33/react-canbetoc](README.md) › [Globals](globals.md)

# @nju33/react-canbetoc

# react-canbetoc

A React component to create table of contents.

## Install

It is necessary to install `react`, `react-dom` and `fp-ts` together.

```jsx
yarn add react react-dom fp-ts @nju33/react-canbetoc
```

## Example

```jsx
import 'react-canbetoc/strategies/collapse/text-color.css'
import { Canbetoc } from 'react-canbetoc'
import { CollapseStrategy } from 'react-canbetoc/strategies/collapse'

const strategy = new CollapseStrategy()

return (
  <>
    <div data-canbetoc-id="foo" />
    <Canbetoc
      id="foo"
      // You can specify a selectors roughly
      // They have the priority that younger the index number
      selectors={['h2', 'h3', 'h4', 'h5']}
      strategy={strategy}>
      <article>
        <header>...</header>

        <div>
          {/* An element want to be the table of contents should has also the `id` attribute */}
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
              The markup should be order specified by the `selectors` property
              For instance in the below, The `h4` tag is not become the table of contents because an `h3` is skipping
        */}
          <h2 id="...">...</h2>
          <h4 id="...">...</h4>
        </div>

        <footer>...</footer>
      </article>
    </Canbetoc>
  </>
)
```
