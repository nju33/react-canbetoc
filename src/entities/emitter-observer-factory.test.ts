// /**
//  * @jest-environment jsdom
//  */
// import 'intersection-observer'
// import '@testing-library/jest-dom/extend-expect'
// import { fireEvent, waitFor } from '@testing-library/dom'
// import { DataTable } from './data-table'
// import { IntersectionObserverFactory } from './emitter-observer-factory'

// describe('IntersectionObserverFactory', () => {
//   describe('#create', () => {
//     let absorberElement: Element
//     let fooElement: Element

//     beforeEach(() => {
//       const markup = document.createRange().createContextualFragment(`
// <div>
//   <div data-canbetoc-absorbers-forId="foo"></div>
//   <h2 id="foo">...</h2>
// </div>`)

//       document.body.appendChild(markup)

//       // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//       absorberElement = document.querySelector(
//         '[data-canbetoc-absorbers-forId="foo"]'
//       )!
//       // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//       fooElement = document.querySelector('#foo')!
//     })

//     test('.', () => {
//       const iof = new IntersectionObserverFactory()
//       const emitterDataTable = new DataTable('canbetoc', 'emitters')
//       const absorberDataTable = new DataTable('canbetoc', 'absorbers')

//       const io = iof.create({
//         emitterDataTable,
//         absorberDataTable
//       })

//       // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//       io.observe(fooElement!)

//       waitFor(() =>
//         expect(absorberElement).toHaveAttribute(
//           absorberDataTable.getAttributeName('displayed'),
//           'true'
//         )
//       )

//       fireEvent.scroll(document.body, { target: { scrollY: 100 } })
//       console.log(JSON.stringify((absorberElement as any).dataset))

//       expect(absorberElement).toHaveAttribute(
//         absorberDataTable.getAttributeName('displayed'),
//         'true'
//       )
//     })
//   })
// })
