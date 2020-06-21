/**
 * @jest-environment jsdom
 */
import { pipe } from 'fp-ts/lib/function'
import { isSome, map, some } from 'fp-ts/lib/Option'
import { TocItemDomAdaptor } from './toc-item-dom-adaptor'

describe('TocItemDomAdaptor', () => {
  beforeEach(() => {
    document.body.appendChild(
      document.createRange().createContextualFragment(`
<div id="foo">
  <div data-canbetoc-toc-id="something-id" />
</div>
      `)
    )
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('findById', () => {
    const adaptor = new TocItemDomAdaptor()

    const optionElement = adaptor.findById(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.getElementById('foo')!,
      some('something-id')
    )

    expect(isSome(optionElement)).toBeTruthy()
    pipe(
      optionElement,
      map((element) => {
        expect(element).toBeInstanceOf(Element)
      })
    )
  })
})
