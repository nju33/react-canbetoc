// import { TraitDataTable } from './data-table'
// import { EmitterObserver, TraitEmitterObserver } from './emitter-observer'

// export interface CreateEmitterObserverDto {
//   absorberDataTable: TraitDataTable
//   emitterDataTable: TraitDataTable
// }

// export interface TraitEmitterObserverFactory {
//   get: (...args: [CreateEmitterObserverDto]) => EmitterObserver
// }

// export class EmitterObserverFactory implements TraitEmitterObserverFactory {
//   #instance: TraitEmitterObserver | undefined

//   get({
//     absorberDataTable,
//     emitterDataTable
//   }: CreateEmitterObserverDto): TraitEmitterObserver {
//     if (this.#instance instanceof EmitterObserver) {
//       return this.#instance
//     }

//     this.#instance = new EmitterObserver()

//     return this.#instance

//     const observer = new EmitterObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.EmitterRatio === 0) {
//           return
//         }

//         const emitterElement = entry.target
//         const emitterId = emitterElement.id

//         const absorber = document.querySelector(
//           absorberDataTable.getSelector('forId', emitterId)
//         )
//         if (absorber === null) {
//           return
//         }

//         absorber.setAttribute(
//           absorberDataTable.getSelector('displayed'),
//           'true'
//         )
//       })
//     })

//     this.#instance = observer

//     return this.#instance
//   }
// }
