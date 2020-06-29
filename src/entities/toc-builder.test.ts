/**
 * @jest-environment jsdom
 */
import { TocEntryDomAdaptor } from '../interface/toc-entry-dom-adaptor'
import { TocListItemAdaptor } from '../interface/toc-list-item-adaptor'
import { Selector } from './selector'
import { TocBuilder, TraitTocBuilder } from './toc-builder'
import { TocBuilderCommand } from './toc-builder-command'
import { TocEntry } from './toc-entry'
import { TocEntryService } from './toc-entry-service'

describe('TocBuilder', () => {
  let tocBuilder: TraitTocBuilder
  let foo: HTMLElement
  let bar: HTMLElement
  let baz: HTMLElement

  beforeEach(() => {
    document.body.appendChild(
      document.createRange().createContextualFragment(`
<div>
  <h1 id="foo">foo</h1>
  <h2 id="bar">bar</h1>
  <h1 id="baz">baz</h1>
</div>
      `)
    )

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    foo = document.getElementById('foo')!
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    bar = document.getElementById('bar')!
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    baz = document.getElementById('baz')!

    tocBuilder = new TocBuilder(
      new TocEntryDomAdaptor(),
      new TocListItemAdaptor(),
      new TocEntryService(new TocEntryDomAdaptor(), new TocListItemAdaptor())
    )

    tocBuilder.build([
      new TocBuilderCommand(new Selector('h1', 1), [foo]),
      new TocBuilderCommand(new Selector('h2', 2), [bar]),
      new TocBuilderCommand(new Selector('h1', 1), [baz])
    ])
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('get', () => {
    const lists = tocBuilder.get().getItems()
    expect(lists).toHaveLength(2)
    expect(lists).toMatchObject([expect.any(TocEntry), expect.any(TocEntry)])

    const childLists = lists[0].getItems()
    expect(childLists).toHaveLength(1)
    expect(childLists).toMatchObject([expect.any(TocEntry)])

    expect(lists[1].getItems()).toHaveLength(0)
  })

  test('getList', () => {
    expect(tocBuilder.getList()).toHaveLength(3)
  })
})
