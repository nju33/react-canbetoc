/**
 * @jest-environment jsdom
 */
import { fromNullable, some } from 'fp-ts/lib/Option'
import { TocListItemAdaptor } from './toc-list-item-adaptor'

describe('TocListItemAdaptor', () => {
  let tocListItemAdaptor: TocListItemAdaptor

  beforeAll(() => {
    tocListItemAdaptor = new TocListItemAdaptor()
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('getActiveItem', () => {
    document.body.appendChild(
      document.createRange().createContextualFragment(`
<li id="foo" data-canbetoc-toc-active-branch="true"></li>
      `)
    )
    const foo = document.getElementById('foo')

    const activeBranch = tocListItemAdaptor.getActiveBranch(fromNullable(foo))

    expect(activeBranch).toBeTruthy()
  })

  test('getActiveItem', () => {
    document.body.appendChild(
      document.createRange().createContextualFragment(`
<li id="foo" data-canbetoc-toc-active-item="true"></li>
      `)
    )
    const foo = document.getElementById('foo')

    const activeItem = tocListItemAdaptor.getActiveItem(fromNullable(foo))

    expect(activeItem).toBeTruthy()
  })

  test('getAnchorHeight', () => {
    document.body.appendChild(
      document.createRange().createContextualFragment(`
<li id="foo" data-canbetoc-toc-anchor-height="21"></li>
      `)
    )
    const foo = document.getElementById('foo')

    const anchorHeight = tocListItemAdaptor.getAnchorHeight(fromNullable(foo))

    expect(anchorHeight).toMatchObject(some(21))
  })

  test('getHierarchyLevel', () => {
    document.body.appendChild(
      document.createRange().createContextualFragment(`
<li id="foo" data-canbetoc-toc-hierarchy-level="2"></li>
      `)
    )
    const foo = document.getElementById('foo')

    const hierarchyLevel = tocListItemAdaptor.getHierarchyLevel(
      fromNullable(foo)
    )

    expect(hierarchyLevel).toMatchObject(some(2))
  })

  test('getId', () => {
    document.body.appendChild(
      document.createRange().createContextualFragment(`
<li id="foo" data-canbetoc-toc-id="foo"></li>
      `)
    )
    const foo = document.getElementById('foo')

    const id = tocListItemAdaptor.getId(fromNullable(foo))

    expect(id).toMatchObject(some('foo'))
  })

  test('getLatestIntersected', () => {
    document.body.appendChild(
      document.createRange().createContextualFragment(`
<li id="foo" data-canbetoc-toc-latest-intersected="true"></li>
      `)
    )
    const foo = document.getElementById('foo')

    const latestIntersected = tocListItemAdaptor.getLatestIntersected(
      fromNullable(foo)
    )

    expect(latestIntersected).toBeTruthy()
  })
})
