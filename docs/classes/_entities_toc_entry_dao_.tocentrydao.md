[@nju33/react-canbetoc](../README.md) › [Globals](../globals.md) › ["entities/toc-entry-dao"](../modules/_entities_toc_entry_dao_.md) › [TocEntryDao](_entities_toc_entry_dao_.tocentrydao.md)

# Class: TocEntryDao

## Hierarchy

* **TocEntryDao**

## Implements

* [TraitTocEntryDao](../interfaces/_entities_toc_entry_dao_.traittocentrydao.md)

## Index

### Constructors

* [constructor](_entities_toc_entry_dao_.tocentrydao.md#constructor)

### Properties

* [#getKey](_entities_toc_entry_dao_.tocentrydao.md#private-#getkey)
* [#randomId](_entities_toc_entry_dao_.tocentrydao.md#private-#randomid)
* [entry](_entities_toc_entry_dao_.tocentrydao.md#private-readonly-entry)
* [tocEntryService](_entities_toc_entry_dao_.tocentrydao.md#private-readonly-tocentryservice)

### Methods

* [getRandomId](_entities_toc_entry_dao_.tocentrydao.md#getrandomid)
* [useHierarchyLevel](_entities_toc_entry_dao_.tocentrydao.md#usehierarchylevel)
* [useHref](_entities_toc_entry_dao_.tocentrydao.md#usehref)
* [useId](_entities_toc_entry_dao_.tocentrydao.md#useid)
* [useItems](_entities_toc_entry_dao_.tocentrydao.md#useitems)
* [useSmoothScrollCallback](_entities_toc_entry_dao_.tocentrydao.md#usesmoothscrollcallback)
* [useText](_entities_toc_entry_dao_.tocentrydao.md#usetext)

## Constructors

###  constructor

\+ **new TocEntryDao**(`tocEntryService`: [TraitTocEntryService](../interfaces/_entities_toc_entry_service_.traittocentryservice.md), `entry`: [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)): *[TocEntryDao](_entities_toc_entry_dao_.tocentrydao.md)*

*Defined in [src/entities/toc-entry-dao.ts:34](https://github.com/nju33/react-canbetoc/blob/17dca0a/src/entities/toc-entry-dao.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`tocEntryService` | [TraitTocEntryService](../interfaces/_entities_toc_entry_service_.traittocentryservice.md) |
`entry` | [TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md) |

**Returns:** *[TocEntryDao](_entities_toc_entry_dao_.tocentrydao.md)*

## Properties

### `Private` #getKey

• **#getKey**: *function* = getOrElse(() => '')

*Defined in [src/entities/toc-entry-dao.ts:40](https://github.com/nju33/react-canbetoc/blob/17dca0a/src/entities/toc-entry-dao.ts#L40)*

#### Type declaration:

▸ (`ma`: Option‹A›): *A*

**Parameters:**

Name | Type |
------ | ------ |
`ma` | Option‹A› |

___

### `Private` #randomId

• **#randomId**: *string* = String(Math.floor(Math.random() * 1_000_000_000_000))

*Defined in [src/entities/toc-entry-dao.ts:41](https://github.com/nju33/react-canbetoc/blob/17dca0a/src/entities/toc-entry-dao.ts#L41)*

___

### `Private` `Readonly` entry

• **entry**: *[TraitTocEntry](../interfaces/_entities_toc_entry_.traittocentry.md)*

*Defined in [src/entities/toc-entry-dao.ts:37](https://github.com/nju33/react-canbetoc/blob/17dca0a/src/entities/toc-entry-dao.ts#L37)*

___

### `Private` `Readonly` tocEntryService

• **tocEntryService**: *[TraitTocEntryService](../interfaces/_entities_toc_entry_service_.traittocentryservice.md)*

*Defined in [src/entities/toc-entry-dao.ts:36](https://github.com/nju33/react-canbetoc/blob/17dca0a/src/entities/toc-entry-dao.ts#L36)*

## Methods

###  getRandomId

▸ **getRandomId**(): *string*

*Defined in [src/entities/toc-entry-dao.ts:43](https://github.com/nju33/react-canbetoc/blob/17dca0a/src/entities/toc-entry-dao.ts#L43)*

**Returns:** *string*

___

###  useHierarchyLevel

▸ **useHierarchyLevel**(): *number*

*Defined in [src/entities/toc-entry-dao.ts:53](https://github.com/nju33/react-canbetoc/blob/17dca0a/src/entities/toc-entry-dao.ts#L53)*

**Returns:** *number*

___

###  useHref

▸ **useHref**(): *string*

*Defined in [src/entities/toc-entry-dao.ts:62](https://github.com/nju33/react-canbetoc/blob/17dca0a/src/entities/toc-entry-dao.ts#L62)*

**Returns:** *string*

___

###  useId

▸ **useId**(): *string*

*Defined in [src/entities/toc-entry-dao.ts:47](https://github.com/nju33/react-canbetoc/blob/17dca0a/src/entities/toc-entry-dao.ts#L47)*

**Returns:** *string*

___

###  useItems

▸ **useItems**(): *[TraitTocEntryDao](../interfaces/_entities_toc_entry_dao_.traittocentrydao.md)[]*

*Defined in [src/entities/toc-entry-dao.ts:74](https://github.com/nju33/react-canbetoc/blob/17dca0a/src/entities/toc-entry-dao.ts#L74)*

**Returns:** *[TraitTocEntryDao](../interfaces/_entities_toc_entry_dao_.traittocentrydao.md)[]*

___

###  useSmoothScrollCallback

▸ **useSmoothScrollCallback**(): *function*

*Defined in [src/entities/toc-entry-dao.ts:82](https://github.com/nju33/react-canbetoc/blob/17dca0a/src/entities/toc-entry-dao.ts#L82)*

**Returns:** *function*

▸ (`event`: MouseEvent‹HTMLElement›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | MouseEvent‹HTMLElement› |

___

###  useText

▸ **useText**(): *string | null*

*Defined in [src/entities/toc-entry-dao.ts:98](https://github.com/nju33/react-canbetoc/blob/17dca0a/src/entities/toc-entry-dao.ts#L98)*

**Returns:** *string | null*
