/**
 * @jest-environment jsdom
 */
import { TocListDomAdaptor } from './toc-list-dom-adaptor'

describe('TocListDomAdaptor', () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const getElement = (): HTMLElement => document.getElementById('foo')!

  beforeEach(() => {
    document.body.appendChild(
      document.createRange().createContextualFragment(`
<div id="foo"></div>
      `)
    )
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('updateDisplayedItemIds', () => {
    const adaptor = new TocListDomAdaptor()

    adaptor.updateDisplayedItemIds(getElement(), ['foo', 'bar', 'baz'])

    expect(
      getElement().getAttribute('data-canbetoc-toc-displayed-item-ids')
    ).toBe('foo bar baz')
  })

  test('updateId', () => {
    const adaptor = new TocListDomAdaptor()

    adaptor.updateId(getElement(), 123)

    expect(getElement().getAttribute('data-canbetoc-toc-list-id')).toBe('123')
  })
})
