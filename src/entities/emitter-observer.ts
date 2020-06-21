// import { mapNullable, none, Option, some } from 'fp-ts/lib/Option'
// import { Emitter } from './emitter'
// import { TraitDataTable } from './data-table'

// export interface TraitEmitterObserver {
//   disconnect: () => void
//   observe: (element: Element) => void
//   onViewport: (element: Element) => void
// }

// export class EmitterObserver implements TraitEmitterObserver {
//   #observer: Option<IntersectionObserver> = none

//   constructor() {
//     const intersectionObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.intersectionRatio === 0) {
//           return
//         }

//         const emitter = Emitter.fromById(entry.target.id)
//         this.onViewport(entry.target)
//       }
//     })

//     this.#observer = some(intersectionObserver)
//   }

//   onViewport(element: Element): void {
//   }

//   observe(element: Element): void {
//     mapNullable((observer: IntersectionObserver) => {
//       observer.observe(element)
//     })(this.#observer)
//   }
// }
