import { pipe } from 'fp-ts/lib/function'
import { isSome, none, Option } from 'fp-ts/lib/Option'
import { TraitTocItemDomAdaptor } from './toc-item-dom-adaptor'

export interface TraitTocItem {
  getDisplayed: () => boolean
  getElement: () => Option<Element>
  getId: () => Option<string>
  setDisplayed: (displayed: Option<boolean>) => void
  setId: (id: Option<string>) => void
}

export class TocItem implements TraitTocItem {
  #displayed: Option<boolean> = none
  #id: Option<string> = none
  #insert: boolean = false
  #element: HTMLElement

  constructor(private readonly tocItemDomAdaptor: TraitTocItemDomAdaptor) {
    this.#element = tocItemDomAdaptor.newElement()
  }

  getElement(): Option<Element> {
    return this.tocItemDomAdaptor.findById(this.#id)
  }

  setDisplayed(displayed: Option<boolean>): void {
    this.#displayed = displayed
  }

  getDisplayed(): boolean {
    return pipe(this.#displayed, isSome)
  }

  getId(): Option<string> {
    return this.#id
  }

  setId(id: Option<string>): void {
    this.#id = id
  }
}

// export interface StructTocItem {
//   /**
//    * Displayed in viewport
//    */
//   readonly displayed: Option<string>
//   readonly hierarchyIndex: Option<string>
//   readonly id: Option<string>
//   readonly rootIndex: Option<string>
// }

// export interface TraitTocItem {
//   addChildren: (items: TraitTocItem[]) => void
//   setDisplayed: (displayed: string) => TraitTocItem
//   setHierarchyIndex: (hierarchyIndex: string) => TraitTocItem
//   setId: (id: string) => TraitTocItem
//   setRootIndex: (rootIndex: string) => TraitTocItem
// }

// export type TocItemEntity = StructTocItem & TraitTocItem

// export interface AttributeAdaptor {
//   displayed: TraitHtmlAttribute
//   hierarchyIndex: TraitHtmlAttribute
//   id: TraitHtmlAttribute
//   rootIndex: TraitHtmlAttribute
// }
// export interface TraitTocItemDomAdaptor {
//   displayed: TraitHtmlAttribute
//   hierarchyIndex: TraitHtmlAttribute
//   id: TraitHtmlAttribute
//   rootIndex: TraitHtmlAttribute
// }
// export type TocItemAttributeDto = AttributeDto

// export class TocItem implements TraitTocItem {
//   #struct: StructTocItem
//   #children: TraitTocItem[] = []

//   // static fromById(id: string, attrs: AttributeDto = {}): Option<TraitTocItem> {
//   //   if (isNone(fromNullable(document.getElementById(`#${id}`)))) {
//   //     throw new Error(`Can't find element with #${id}`)
//   //   }

//   //   return pipe(
//   //     fromNullable(document.querySelector(attrs.id.toSelector(id).toString())),
//   //     map((element) => {
//   //       const getAttribute = (attr: TraitHtmlAttribute): Option<string> => {
//   //         return fromNullable(element.getAttribute(attr.toString()))
//   //       }

//   //       return new TocItem({
//   //         id: some(id),
//   //         rootIndex: getAttribute(attrs.rootIndex),
//   //         hierarchyIndex: getAttribute(attrs.hierarchyIndex),
//   //         displayed: getAttribute(attrs.rootIndex)
//   //       })
//   //     })
//   //   )
//   // }

//   constructor(struct: StructTocItem) {
//     this.#struct = struct
//   }

//   setDisplayed(displayed: string): TraitTocItem {
//     return new TocItem({ ...this.#struct, displayed: some(displayed) })
//   }

//   setId(id: string): TraitTocItem {
//     return new TocItem({ ...this.#struct, id: some(id) })
//   }

//   setHierarchyIndex(hierarchyIndex: string): TraitTocItem {
//     return new TocItem({
//       ...this.#struct,
//       hierarchyIndex: some(hierarchyIndex)
//     })
//   }

//   setRootIndex(rootIndex: string): TraitTocItem {
//     return new TocItem({ ...this.#struct, rootIndex: some(rootIndex) })
//   }
// }
