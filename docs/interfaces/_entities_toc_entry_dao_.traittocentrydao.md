[@nju33/react-canbetoc](../README.md) › [Globals](../globals.md) › ["entities/toc-entry-dao"](../modules/_entities_toc_entry_dao_.md) › [TraitTocEntryDao](_entities_toc_entry_dao_.traittocentrydao.md)

# Interface: TraitTocEntryDao

## Hierarchy

* **TraitTocEntryDao**

## Implemented by

* [TocEntryDao](../classes/_entities_toc_entry_dao_.tocentrydao.md)

## Index

### Properties

* [getRandomId](_entities_toc_entry_dao_.traittocentrydao.md#getrandomid)
* [useHierarchyLevel](_entities_toc_entry_dao_.traittocentrydao.md#usehierarchylevel)
* [useHref](_entities_toc_entry_dao_.traittocentrydao.md#usehref)
* [useId](_entities_toc_entry_dao_.traittocentrydao.md#useid)
* [useItems](_entities_toc_entry_dao_.traittocentrydao.md#useitems)
* [useSmoothScrollCallback](_entities_toc_entry_dao_.traittocentrydao.md#usesmoothscrollcallback)
* [useText](_entities_toc_entry_dao_.traittocentrydao.md#usetext)

## Properties

###  getRandomId

• **getRandomId**: *function*

*Defined in [src/entities/toc-entry-dao.ts:8](https://github.com/nju33/react-canbetoc/blob/dbfcbaa/src/entities/toc-entry-dao.ts#L8)*

#### Type declaration:

▸ (): *string*

___

###  useHierarchyLevel

• **useHierarchyLevel**: *function*

*Defined in [src/entities/toc-entry-dao.ts:9](https://github.com/nju33/react-canbetoc/blob/dbfcbaa/src/entities/toc-entry-dao.ts#L9)*

#### Type declaration:

▸ (): *number*

___

###  useHref

• **useHref**: *function*

*Defined in [src/entities/toc-entry-dao.ts:13](https://github.com/nju33/react-canbetoc/blob/dbfcbaa/src/entities/toc-entry-dao.ts#L13)*

A memoized href value which is extracted the value of the TocEntry#target

#### Type declaration:

▸ (): *string*

___

###  useId

• **useId**: *function*

*Defined in [src/entities/toc-entry-dao.ts:17](https://github.com/nju33/react-canbetoc/blob/dbfcbaa/src/entities/toc-entry-dao.ts#L17)*

A memoized id value which is extracted the value of the TocEntry#getId

#### Type declaration:

▸ (): *string*

___

###  useItems

• **useItems**: *function*

*Defined in [src/entities/toc-entry-dao.ts:21](https://github.com/nju33/react-canbetoc/blob/dbfcbaa/src/entities/toc-entry-dao.ts#L21)*

A memoized items value which is extracted the value of the TocEntry#getItems and converted into this

#### Type declaration:

▸ (): *[TraitTocEntryDao](_entities_toc_entry_dao_.traittocentrydao.md)[]*

___

###  useSmoothScrollCallback

• **useSmoothScrollCallback**: *function*

*Defined in [src/entities/toc-entry-dao.ts:27](https://github.com/nju33/react-canbetoc/blob/dbfcbaa/src/entities/toc-entry-dao.ts#L27)*

A memoized callback

**`eventproperty`** 

#### Type declaration:

▸ (): *function*

▸ (`event`: MouseEvent‹HTMLElement›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | MouseEvent‹HTMLElement› |

___

###  useText

• **useText**: *function*

*Defined in [src/entities/toc-entry-dao.ts:31](https://github.com/nju33/react-canbetoc/blob/dbfcbaa/src/entities/toc-entry-dao.ts#L31)*

A memoized text which is extracted the value of the TocEntry#element

#### Type declaration:

▸ (): *string | null*
