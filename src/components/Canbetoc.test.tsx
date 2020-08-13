/**
 * @jest-environment jsdom
 */
import 'intersection-observer'
import '@testing-library/jest-dom'
import { act, getAllByRole, render, RenderResult } from '@testing-library/react'
import * as React from 'react'
import { ExpansionStrategy } from '../strategies/expansion'
import { Canbetoc } from './Canbetoc'

describe('<Canbetoc />', () => {
  const navigation = document.createElement('nav')
  navigation.setAttribute('data-canbetoc-id', 'test')
  const container = document.createElement('div')
  let renderResult: RenderResult

  document.body.appendChild(navigation)
  document.body.appendChild(container)

  beforeEach(async () => {
    jest.useFakeTimers()
    renderResult = render(
      <Canbetoc
        id="test"
        selectors={['h2', 'h3']}
        strategy={new ExpansionStrategy()}>
        <div>
          <h2 id="foo">foo</h2>
          <h3 id="bar">bar</h3>
          <h2 id="baz">baz</h2>
        </div>
      </Canbetoc>
    )

    await new Promise((resolve) => {
      setImmediate(resolve, 1000)
    })
  })

  test('snapshot', () => {
    act(() => {
      jest.advanceTimersByTime(100)
    })
    const { asFragment } = renderResult

    expect(asFragment()).toMatchSnapshot()
  })

  describe('elements', () => {
    test('list', () => {
      act(() => {
        jest.advanceTimersByTime(100)
      })
      const [list] = getAllByRole(navigation, 'list')
      expect(list).toHaveClass('react-canbetoc__toc-list')
      expect(list).toHaveClass('react-canbetoc__toc-list--root')
    })

    test('listitem', () => {
      act(() => {
        jest.advanceTimersByTime(100)
      })
      const [list] = getAllByRole(navigation, 'list')
      const listitems = getAllByRole(list, 'listitem')
      const expectListitem = (
        listitem: HTMLElement,
        data: { hierarchyLevel: string; id: string }
      ): void => {
        expect(listitem).toHaveClass('react-canbetoc__toc-list-item')
        expect(listitem).toHaveAttribute(
          'data-canbetoc-toc-active-branch',
          'false'
        )
        expect(listitem).toHaveAttribute(
          'data-canbetoc-toc-active-item',
          'false'
        )
        expect(listitem).toHaveAttribute('data-canbetoc-toc-anchor-height', '0')
        expect(listitem).toHaveAttribute(
          'data-canbetoc-toc-hierarchy-level',
          data.hierarchyLevel
        )
        expect(listitem).toHaveAttribute('data-canbetoc-toc-id', data.id)
        expect(listitem).toHaveAttribute(
          'data-canbetoc-toc-instance-id',
          expect.any(String)
        )
        expect(listitem).toHaveAttribute(
          'data-canbetoc-toc-latest-intersected',
          'false'
        )
      }

      expect(listitems).toHaveLength(3)
      expectListitem(listitems[0], { id: 'foo', hierarchyLevel: '1' })
      expectListitem(listitems[1], { id: 'bar', hierarchyLevel: '2' })
      expectListitem(listitems[2], { id: 'baz', hierarchyLevel: '1' })
    })
  })
})
